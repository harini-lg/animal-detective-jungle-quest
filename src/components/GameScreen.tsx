import React, { useState, useEffect } from 'react';
import {
  Volume2,
  VolumeX,
  Volume1,
  Sparkles,
  HelpCircle,
  ArrowRight,
  Flame,
  Home,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Speech,
} from 'lucide-react';
import { Question, Animal, Difficulty } from '../types/game';
import { AnimalIllustration } from './AnimalIllustration';
import { soundEngine } from '../utils/audioEngine';
import { fireCelebrationConfetti, fireStarBurst } from '../utils/confetti';

interface GameScreenProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  score: number;
  streak: number;
  difficulty: Difficulty;
  isMuted: boolean;
  onToggleMute: () => void;
  onAnswerSelected: (selectedAnimal: Animal, isCorrect: boolean, pointsEarned: number) => void;
  onUseHint: () => void;
  hintsRemaining: number;
  onExitGame: () => void;
  onNextQuestion: () => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({
  question,
  questionIndex,
  totalQuestions,
  score,
  streak,
  difficulty,
  isMuted,
  onToggleMute,
  onAnswerSelected,
  onUseHint,
  hintsRemaining,
  onExitGame,
  onNextQuestion,
}) => {
  const { animal, options, disabledOptionIds } = question;
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeSpeechClue, setActiveSpeechClue] = useState<number | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [revealedCluesCount, setRevealedCluesCount] = useState<number>(() => {
    // Determine based on difficulty
    if (difficulty === 'easy') return 3;
    if (difficulty === 'medium') return 2;
    return 1;
  });
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [roundPoints, setRoundPoints] = useState(0);

  // Play animal sound automatically on new question
  useEffect(() => {
    setHasAnswered(false);
    setSelectedOptionId(null);
    setRevealedCluesCount(
      difficulty === 'easy' ? 3 : difficulty === 'medium' ? 2 : 1
    );

    const timer = setTimeout(() => {
      handlePlaySound();
    }, 450);

    return () => clearTimeout(timer);
  }, [questionIndex]);

  const handlePlaySound = () => {
    setIsPlayingAudio(true);
    soundEngine.playAnimalSound(animal.soundType);
    setTimeout(() => {
      setIsPlayingAudio(false);
    }, 1800);
  };

  const handleSpeakClue = (clueIndex: number, text: string) => {
    soundEngine.playClick();
    setActiveSpeechClue(clueIndex);
    soundEngine.speak(text, () => {
      setActiveSpeechClue(null);
    });
  };

  const handleOptionClick = (option: Animal) => {
    if (hasAnswered || disabledOptionIds.includes(option.id)) return;

    setSelectedOptionId(option.id);
    setHasAnswered(true);

    const isCorrect = option.id === animal.id;
    setIsAnswerCorrect(isCorrect);

    if (isCorrect) {
      soundEngine.playSuccess();
      fireStarBurst();

      // Calculate score with streak bonus and clue bonus
      let points = 100;
      if (streak > 0) points += streak * 25;
      if (revealedCluesCount === 1) points += 50; // Deduction master bonus
      if (!question.hintUsed) points += 25;
      setRoundPoints(points);

      onAnswerSelected(option, true, points);
    } else {
      soundEngine.playWrong();
      setRoundPoints(0);
      onAnswerSelected(option, false, 0);
    }
  };

  const handleRevealNextClue = () => {
    if (revealedCluesCount < 3) {
      soundEngine.playHint();
      setRevealedCluesCount((prev) => prev + 1);
    }
  };

  const progressPercent = Math.round(((questionIndex + (hasAnswered ? 1 : 0)) / totalQuestions) * 100);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-emerald-900 via-teal-900 to-green-950 text-white flex flex-col justify-between selection:bg-amber-300 selection:text-emerald-950">
      {/* Top Header Status Bar */}
      <header className="relative z-20 max-w-5xl mx-auto w-full px-4 pt-3 md:pt-4 flex items-center justify-between gap-3">
        {/* Back to Home Button */}
        <button
          onClick={() => {
            soundEngine.playClick();
            onExitGame();
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-600/40 text-emerald-200 text-sm font-semibold transition-all active:scale-95 shadow-md"
        >
          <Home className="w-4 h-4" />
          <span className="hidden sm:inline">Camp</span>
        </button>

        {/* Progress & Mystery Counter */}
        <div className="flex-1 max-w-xs sm:max-w-md mx-2">
          <div className="flex justify-between items-center text-xs md:text-sm font-bold text-emerald-200 mb-1">
            <span className="flex items-center gap-1">
              <span>Mystery</span>
              <span className="font-mono text-amber-300 font-extrabold text-sm md:text-base">
                {questionIndex + 1}
              </span>
              <span>of</span>
              <span className="font-mono text-white">{totalQuestions}</span>
            </span>
            <span className="font-mono text-amber-300">{progressPercent}%</span>
          </div>

          {/* Progress Bar Container */}
          <div className="w-full h-3 bg-emerald-950/80 rounded-full overflow-hidden p-0.5 border border-emerald-600/30">
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-yellow-300 to-emerald-400 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Score & Streak HUD Cluster */}
        <div className="flex items-center gap-2">
          {streak > 1 && (
            <div className="hidden sm:flex items-center gap-1 bg-amber-500/20 border border-amber-400/40 px-2.5 py-1 rounded-2xl text-amber-300 text-xs font-bold animate-pulse">
              <Flame className="w-4 h-4 fill-amber-400 text-amber-500" />
              <span>{streak} Streak!</span>
            </div>
          )}

          <div className="bg-emerald-950/80 border border-amber-400/30 px-3 py-1 rounded-2xl flex items-center gap-1.5 shadow-md">
            <span className="text-amber-400 text-sm">⭐</span>
            <span className="font-mono font-extrabold text-amber-300 text-base md:text-lg">
              {score}
            </span>
          </div>

          <button
            onClick={onToggleMute}
            className="p-2 rounded-2xl bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-600/40 text-emerald-200 transition-all active:scale-95"
            aria-label="Toggle sound"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-300" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Main Detective Challenge Area */}
      <main className="relative z-10 max-w-4xl mx-auto w-full px-4 py-3 md:py-5 flex-1 flex flex-col justify-center">
        {/* Top Sound Box: Listen to Animal Sound */}
        <div className="bg-emerald-950/70 backdrop-blur-md rounded-3xl p-4 md:p-5 border-2 border-emerald-500/40 shadow-xl mb-4 text-center">
          <div className="flex items-center justify-between mb-2">
            <span className="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider text-amber-300 bg-amber-500/20 px-2.5 py-0.5 rounded-full border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sound Clue</span>
            </span>

            {/* Hint Button */}
            <button
              onClick={() => {
                if (hintsRemaining > 0 && !question.hintUsed && !hasAnswered) {
                  soundEngine.playHint();
                  onUseHint();
                }
              }}
              disabled={hintsRemaining <= 0 || question.hintUsed || hasAnswered}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-2xl text-xs md:text-sm font-bold border transition-all active:scale-95 ${
                hintsRemaining > 0 && !question.hintUsed && !hasAnswered
                  ? 'bg-amber-400 hover:bg-amber-300 text-emerald-950 border-amber-300 shadow-md'
                  : 'bg-emerald-900/40 text-emerald-400/60 border-emerald-700/30 cursor-not-allowed'
              }`}
            >
              <Lightbulb className="w-4 h-4" />
              <span>Hint ({hintsRemaining})</span>
            </button>
          </div>

          {/* Big Interactive Audio Speaker Button */}
          <div className="flex flex-col items-center justify-center my-1">
            <button
              onClick={handlePlaySound}
              className={`group relative p-4 md:p-5 rounded-3xl border-4 transition-all duration-200 active:scale-95 flex items-center justify-center shadow-2xl ${
                isPlayingAudio
                  ? 'bg-amber-400 border-white scale-105 shadow-amber-500/50'
                  : 'bg-emerald-600 hover:bg-emerald-500 border-emerald-300 hover:border-amber-300 shadow-emerald-950/60'
              }`}
              title="Click to replay the animal sound!"
              aria-label="Replay animal sound"
            >
              {/* Sound Wave Animation rings */}
              {isPlayingAudio && (
                <>
                  <span className="absolute -inset-2 rounded-3xl border-2 border-amber-300 animate-ping opacity-60" />
                  <span className="absolute -inset-4 rounded-3xl border-2 border-amber-400/40 animate-pulse-ring" />
                </>
              )}

              <div className="flex items-center gap-3 text-emerald-950">
                <Volume2 className={`w-8 h-8 md:w-10 md:h-10 ${isPlayingAudio ? 'animate-bounce text-emerald-950' : 'text-white'}`} />
                <div className="text-left">
                  <div className={`font-black text-lg md:text-xl font-['Fredoka'] ${isPlayingAudio ? 'text-emerald-950' : 'text-white'}`}>
                    {isPlayingAudio ? 'Listening...' : 'Tap to Listen!'}
                  </div>
                  <div className={`text-xs font-semibold ${isPlayingAudio ? 'text-emerald-900' : 'text-emerald-100'}`}>
                    Replay Animal Call
                  </div>
                </div>
              </div>
            </button>

            {/* Sound Wave Bars graphic */}
            <div className="flex items-center gap-1.5 mt-3 h-5">
              {[4, 12, 18, 10, 20, 14, 8, 16, 22, 12, 6].map((h, i) => (
                <div
                  key={i}
                  className={`w-1 rounded-full transition-all duration-150 ${
                    isPlayingAudio
                      ? 'bg-amber-300 animate-pulse'
                      : 'bg-emerald-700/60'
                  }`}
                  style={{
                    height: isPlayingAudio ? `${Math.min(24, h * 1.2)}px` : '6px',
                    animationDelay: `${i * 0.08}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 3 Clues Section */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-emerald-300 flex items-center gap-1">
              <span>Detective Notebook:</span>
              <span className="text-amber-300">
                {revealedCluesCount} of 3 Clues Discovered
              </span>
            </span>

            {revealedCluesCount < 3 && !hasAnswered && (
              <button
                onClick={handleRevealNextClue}
                className="text-xs font-bold text-amber-300 hover:text-amber-200 underline flex items-center gap-1"
              >
                <span>Reveal Clue #{revealedCluesCount + 1}</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
            {animal.clues.map((clueText, idx) => {
              const isRevealed = idx < revealedCluesCount;
              const clueLabels = ['🐾 Appearance', '🌿 Habitat & Life', '⭐ Super Clue'];

              return (
                <div
                  key={idx}
                  className={`p-3 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between ${
                    isRevealed
                      ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-50 shadow-md'
                      : 'bg-emerald-950/30 border-emerald-800/40 text-emerald-500/60 select-none'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-300/90">
                      {clueLabels[idx]}
                    </span>

                    {isRevealed && (
                      <button
                        onClick={() => handleSpeakClue(idx, clueText)}
                        className={`p-1.5 rounded-xl border text-xs transition-all active:scale-95 ${
                          activeSpeechClue === idx
                            ? 'bg-amber-400 text-emerald-950 border-white'
                            : 'bg-emerald-900/60 text-emerald-200 border-emerald-600/40 hover:bg-emerald-800'
                        }`}
                        title="Read clue aloud"
                        aria-label="Read clue aloud"
                      >
                        <Volume1 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {isRevealed ? (
                    <p className="text-xs md:text-sm font-medium leading-relaxed text-emerald-100">
                      "{clueText}"
                    </p>
                  ) : (
                    <div
                      onClick={handleRevealNextClue}
                      className="cursor-pointer py-3 text-center text-xs font-semibold text-emerald-400/70 hover:text-amber-300 flex items-center justify-center gap-1"
                    >
                      <HelpCircle className="w-4 h-4" />
                      <span>Tap to Unlock Clue #{idx + 1}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Animal Picture Options */}
        <div>
          <div className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-emerald-300 mb-2 px-1">
            Which animal makes this sound? Tap your answer:
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3.5">
            {options.map((option) => {
              const isSelected = selectedOptionId === option.id;
              const isCorrectAnswer = option.id === animal.id;
              const isDisabled = disabledOptionIds.includes(option.id);

              let cardStyle = 'bg-emerald-950/70 hover:bg-emerald-900/90 border-emerald-500/40 hover:border-amber-400 text-white';
              let badgeColor = 'bg-emerald-900 text-emerald-200';

              if (isDisabled) {
                cardStyle = 'bg-emerald-950/20 border-emerald-900/30 text-emerald-600/40 opacity-40 cursor-not-allowed';
              } else if (hasAnswered) {
                if (isCorrectAnswer) {
                  cardStyle = 'bg-green-600 border-white text-white shadow-xl scale-102 ring-4 ring-green-400/50';
                  badgeColor = 'bg-white text-green-800';
                } else if (isSelected) {
                  cardStyle = 'bg-rose-700 border-rose-400 text-white shadow-lg';
                  badgeColor = 'bg-rose-900 text-rose-200';
                } else {
                  cardStyle = 'bg-emerald-950/40 border-emerald-800/40 text-emerald-400/40 opacity-50';
                }
              }

              return (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option)}
                  disabled={hasAnswered || isDisabled}
                  className={`group relative p-2.5 md:p-3 rounded-3xl border-2 transition-all duration-200 flex flex-col items-center justify-between text-center select-none active:scale-95 shadow-md ${cardStyle}`}
                >
                  {/* Status Indicator Icon */}
                  {hasAnswered && isCorrectAnswer && (
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1 shadow-lg animate-bounce">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  )}
                  {hasAnswered && isSelected && !isCorrectAnswer && (
                    <div className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full p-1 shadow-lg">
                      <XCircle className="w-5 h-5" />
                    </div>
                  )}
                  {isDisabled && (
                    <div className="absolute inset-0 bg-emerald-950/70 rounded-3xl flex items-center justify-center">
                      <span className="text-xs font-bold text-rose-300 line-through">Eliminated</span>
                    </div>
                  )}

                  {/* Animal Illustration */}
                  <div className="w-20 h-20 md:w-24 md:h-24 my-1 flex items-center justify-center">
                    <AnimalIllustration animalId={option.id} className="w-full h-full" animated={!hasAnswered && !isDisabled} />
                  </div>

                  {/* Animal Name */}
                  <div className="w-full mt-1">
                    <div className="font-extrabold text-sm md:text-base leading-tight font-['Fredoka']">
                      {option.name}
                    </div>
                    <div className="text-[11px] font-medium text-emerald-300 truncate mt-0.5">
                      {option.habitat}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback Banner on Answer Selected */}
        {hasAnswered && (
          <div className="mt-4 p-3.5 md:p-4 rounded-3xl bg-emerald-950/95 border-2 border-emerald-400/60 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in">
            <div className="flex items-center gap-3 text-left">
              <span className="text-3xl">
                {isAnswerCorrect ? '🎉' : '💡'}
              </span>
              <div>
                <div className="font-extrabold text-base md:text-lg font-['Fredoka'] flex items-center gap-2">
                  <span className={isAnswerCorrect ? 'text-amber-300' : 'text-emerald-200'}>
                    {isAnswerCorrect ? 'Outstanding Detective Work!' : 'Good Try!'}
                  </span>
                  {isAnswerCorrect && (
                    <span className="text-xs bg-amber-400 text-emerald-950 font-black px-2 py-0.5 rounded-full">
                      +{roundPoints} pts!
                    </span>
                  )}
                </div>
                <p className="text-xs md:text-sm text-emerald-100 leading-snug mt-0.5">
                  {isAnswerCorrect
                    ? `You correctly spotted the ${animal.name}! Fun Fact: ${animal.funFact}`
                    : `That mystery sound was actually the ${animal.name}! Listen again to learn its call.`}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                soundEngine.playClick();
                onNextQuestion();
              }}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-emerald-950 font-black rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 text-sm md:text-base whitespace-nowrap"
            >
              <span>{questionIndex + 1 >= totalQuestions ? 'See Results' : 'Next Mystery'}</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        )}
      </main>

      {/* Decorative Jungle Bottom Trim */}
      <footer className="relative z-10 w-full py-2 bg-emerald-950/60 border-t border-emerald-800/40 text-center text-xs text-emerald-400/70">
        Jungle Tip: Listen closely to the pitch, rhythm, and pattern of every wild call!
      </footer>
    </div>
  );
};
