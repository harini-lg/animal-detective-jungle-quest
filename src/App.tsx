/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TitleScreen } from './components/TitleScreen';
import { GameScreen } from './components/GameScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { FieldGuideModal } from './components/FieldGuideModal';
import { AchievementsModal } from './components/AchievementsModal';
import { Difficulty, Animal, Question, ScreenState } from './types/game';
import { ANIMALS, DIFFICULTY_SETTINGS } from './data/animals';
import { soundEngine } from './utils/audioEngine';

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function App() {
  const [screenState, setScreenState] = useState<ScreenState>('TITLE');
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Score & Gameplay State
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [hintsRemaining, setHintsRemaining] = useState(2);
  const [totalHintsUsedThisGame, setTotalHintsUsedThisGame] = useState(0);
  const [animalsEncountered, setAnimalsEncountered] = useState<Animal[]>([]);

  // Badges & Stars
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([]);
  const [totalStars, setTotalStars] = useState(0);

  // Modals & Audio
  const [isFieldGuideOpen, setIsFieldGuideOpen] = useState(false);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(soundEngine.isMuted);

  // Load saved state from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedHighScore = localStorage.getItem('animal_detective_high_score');
      if (savedHighScore) setHighScore(parseInt(savedHighScore, 10) || 0);

      const savedStars = localStorage.getItem('animal_detective_stars');
      if (savedStars) setTotalStars(parseInt(savedStars, 10) || 0);

      const savedBadges = localStorage.getItem('animal_detective_badges');
      if (savedBadges) {
        try {
          setUnlockedBadges(JSON.parse(savedBadges));
        } catch {
          // ignore parsing error
        }
      }
    }
  }, []);

  const unlockBadge = (badgeId: string) => {
    setUnlockedBadges((prev) => {
      if (prev.includes(badgeId)) return prev;
      const updated = [...prev, badgeId];
      if (typeof window !== 'undefined') {
        localStorage.setItem('animal_detective_badges', JSON.stringify(updated));
      }
      return updated;
    });
  };

  const handleToggleMute = () => {
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
  };

  // Generate randomized questions for the selected difficulty
  const startNewGame = () => {
    const diffInfo = DIFFICULTY_SETTINGS[difficulty];
    const shuffledAnimals = shuffleArray(ANIMALS);
    const selectedAnimals = shuffledAnimals.slice(0, diffInfo.questionsCount);

    const generatedQuestions: Question[] = selectedAnimals.map((targetAnimal) => {
      // Pick 3 distractors
      const otherAnimals = ANIMALS.filter((a) => a.id !== targetAnimal.id);
      const shuffledOthers = shuffleArray(otherAnimals);
      const distractors = shuffledOthers.slice(0, 3);
      const options = shuffleArray([targetAnimal, ...distractors]);

      return {
        animal: targetAnimal,
        options,
        cluesRevealed: diffInfo.initialClues,
        hintUsed: false,
        disabledOptionIds: [],
      };
    });

    setQuestions(generatedQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setCorrectCount(0);
    setHintsRemaining(diffInfo.hintsAllowed);
    setTotalHintsUsedThisGame(0);
    setAnimalsEncountered([]);
    setScreenState('PLAYING');
  };

  const handleAnswerSelected = (selectedAnimal: Animal, isCorrect: boolean, pointsEarned: number) => {
    const currentQ = questions[currentQuestionIndex];
    if (!currentQ) return;

    setAnimalsEncountered((prev) => {
      if (prev.some((a) => a.id === currentQ.animal.id)) return prev;
      return [...prev, currentQ.animal];
    });

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
      setScore((prev) => {
        const nextScore = prev + pointsEarned;
        if (nextScore > highScore) {
          setHighScore(nextScore);
          if (typeof window !== 'undefined') {
            localStorage.setItem('animal_detective_high_score', String(nextScore));
          }
        }
        return nextScore;
      });

      const nextStreak = streak + 1;
      setStreak(nextStreak);
      if (nextStreak > maxStreak) setMaxStreak(nextStreak);

      // Check Achievements
      unlockBadge('first_mystery');

      if (!currentQ.hintUsed && currentQ.cluesRevealed <= 1) {
        unlockBadge('sound_sleuth');
      }

      if (nextStreak >= 5) {
        unlockBadge('super_streak');
      }
    } else {
      setStreak(0);
    }
  };

  const handleUseHint = () => {
    if (hintsRemaining <= 0) return;
    const currentQ = questions[currentQuestionIndex];
    if (!currentQ || currentQ.hintUsed) return;

    // Eliminate 2 wrong choices
    const wrongOptions = currentQ.options.filter((o) => o.id !== currentQ.animal.id);
    const shuffledWrong = shuffleArray(wrongOptions);
    const toDisable = shuffledWrong.slice(0, 2).map((o) => o.id);

    setQuestions((prev) =>
      prev.map((q, idx) =>
        idx === currentQuestionIndex
          ? { ...q, hintUsed: true, disabledOptionIds: toDisable }
          : q
      )
    );

    setHintsRemaining((prev) => Math.max(0, prev - 1));
    setTotalHintsUsedThisGame((prev) => prev + 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Completed the game! Calculate stars
      const accuracy = correctCount / Math.max(1, questions.length);
      let stars = 1;
      if (accuracy >= 0.85) stars = 3;
      else if (accuracy >= 0.6) stars = 2;

      setTotalStars((prev) => {
        const updated = prev + stars;
        if (typeof window !== 'undefined') {
          localStorage.setItem('animal_detective_stars', String(updated));
        }
        return updated;
      });

      if (stars === 3) unlockBadge('jungle_master');
      if (totalHintsUsedThisGame === 0) unlockBadge('eagle_eye');
      if (difficulty === 'expert' && accuracy >= 0.75) unlockBadge('expert_badge');

      setScreenState('RESULTS');
    }
  };

  return (
    <div className="w-full min-h-screen bg-emerald-950 font-['Plus_Jakarta_Sans',sans-serif]">
      {screenState === 'TITLE' && (
        <TitleScreen
          difficulty={difficulty}
          onSelectDifficulty={setDifficulty}
          onStartGame={startNewGame}
          onOpenFieldGuide={() => setIsFieldGuideOpen(true)}
          onOpenAchievements={() => setIsAchievementsOpen(true)}
          isMuted={isMuted}
          onToggleMute={handleToggleMute}
          highScore={highScore}
          starsTotal={totalStars}
        />
      )}

      {screenState === 'PLAYING' && questions[currentQuestionIndex] && (
        <GameScreen
          question={questions[currentQuestionIndex]}
          questionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          score={score}
          streak={streak}
          difficulty={difficulty}
          isMuted={isMuted}
          onToggleMute={handleToggleMute}
          onAnswerSelected={handleAnswerSelected}
          onUseHint={handleUseHint}
          hintsRemaining={hintsRemaining}
          onExitGame={() => setScreenState('TITLE')}
          onNextQuestion={handleNextQuestion}
        />
      )}

      {screenState === 'RESULTS' && (
        <ResultsScreen
          score={score}
          highScore={highScore}
          correctCount={correctCount}
          totalQuestions={questions.length}
          difficulty={difficulty}
          animalsEncountered={animalsEncountered}
          starsEarned={
            correctCount / Math.max(1, questions.length) >= 0.85
              ? 3
              : correctCount / Math.max(1, questions.length) >= 0.6
              ? 2
              : 1
          }
          onPlayAgain={startNewGame}
          onReturnHome={() => setScreenState('TITLE')}
          onOpenFieldGuide={() => setIsFieldGuideOpen(true)}
          onOpenAchievements={() => setIsAchievementsOpen(true)}
        />
      )}

      {/* Field Guide / Soundbook Modal */}
      <FieldGuideModal
        isOpen={isFieldGuideOpen}
        onClose={() => setIsFieldGuideOpen(false)}
      />

      {/* Badges / Achievements Modal */}
      <AchievementsModal
        isOpen={isAchievementsOpen}
        onClose={() => setIsAchievementsOpen(false)}
        unlockedAchievementIds={unlockedBadges}
      />
    </div>
  );
}
