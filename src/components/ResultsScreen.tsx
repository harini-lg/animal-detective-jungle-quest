import React, { useEffect } from 'react';
import { Trophy, Star, RotateCcw, Home, BookOpen, Volume2, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { Animal, Difficulty } from '../types/game';
import { AnimalIllustration } from './AnimalIllustration';
import { soundEngine } from '../utils/audioEngine';
import { fireCelebrationConfetti } from '../utils/confetti';

interface ResultsScreenProps {
  score: number;
  highScore: number;
  correctCount: number;
  totalQuestions: number;
  difficulty: Difficulty;
  animalsEncountered: Animal[];
  starsEarned: number;
  onPlayAgain: () => void;
  onReturnHome: () => void;
  onOpenFieldGuide: () => void;
  onOpenAchievements: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  score,
  highScore,
  correctCount,
  totalQuestions,
  difficulty,
  animalsEncountered,
  starsEarned,
  onPlayAgain,
  onReturnHome,
  onOpenFieldGuide,
  onOpenAchievements,
}) => {
  const accuracy = Math.round((correctCount / Math.max(1, totalQuestions)) * 100);

  useEffect(() => {
    soundEngine.playVictoryFanfare();
    fireCelebrationConfetti();
  }, []);

  const getDetectiveRank = () => {
    if (accuracy === 100) return 'Grand Master Wildlife Detective';
    if (accuracy >= 80) return 'Senior Safari Tracker';
    if (accuracy >= 60) return 'Jungle Scout';
    return 'Junior Explorer';
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-emerald-950 via-teal-950 to-green-950 text-white flex flex-col justify-between py-6 px-4 selection:bg-amber-300 selection:text-emerald-950">
      <div className="max-w-3xl mx-auto w-full flex-1 flex flex-col items-center justify-center text-center">
        {/* Crown / Trophy Celebration Icon */}
        <div className="relative mb-3">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-200 border-4 border-white shadow-2xl flex items-center justify-center text-emerald-950">
            <Trophy className="w-12 h-12 md:w-14 md:h-14 fill-amber-500 text-amber-600" />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-2 border-2 border-white shadow-md">
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        {/* Victory Headline */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-300 font-extrabold text-xs uppercase tracking-wider mb-2">
          <span>Mission Accomplished</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-white font-['Fredoka'] drop-shadow-md">
          {getDetectiveRank()}
        </h1>

        <p className="text-sm md:text-base text-emerald-200 mt-1 max-w-md">
          Sensational detective work! You solved mysteries across the wild safari!
        </p>

        {/* 3 Stars Rating */}
        <div className="flex items-center justify-center gap-3 my-4">
          {[1, 2, 3].map((starIndex) => {
            const isEarned = starIndex <= starsEarned;
            return (
              <div
                key={starIndex}
                className={`transform transition-all duration-300 ${
                  isEarned
                    ? 'scale-110 text-amber-400 filter drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]'
                    : 'text-emerald-900/80 scale-95 opacity-40'
                }`}
              >
                <Star className={`w-10 h-10 md:w-12 md:h-12 ${isEarned ? 'fill-amber-400' : ''}`} />
              </div>
            );
          })}
        </div>

        {/* Score & Accuracy Stats Grid */}
        <div className="w-full max-w-xl bg-emerald-900/60 backdrop-blur-md rounded-3xl p-5 border border-emerald-500/30 shadow-2xl my-3">
          <div className="grid grid-cols-3 gap-3 divide-x divide-emerald-700/40">
            {/* Final Score */}
            <div className="px-2">
              <div className="text-xs uppercase font-extrabold text-emerald-300 mb-0.5">
                Total Score
              </div>
              <div className="font-mono text-2xl md:text-3xl font-black text-amber-300">
                {score}
              </div>
              {score >= highScore && score > 0 && (
                <div className="text-[10px] font-bold text-amber-400 mt-0.5">
                  New High Score!
                </div>
              )}
            </div>

            {/* Accuracy */}
            <div className="px-2">
              <div className="text-xs uppercase font-extrabold text-emerald-300 mb-0.5">
                Correct
              </div>
              <div className="font-mono text-2xl md:text-3xl font-black text-emerald-100">
                {correctCount}/{totalQuestions}
              </div>
              <div className="text-[10px] font-bold text-emerald-300 mt-0.5">
                {accuracy}% Accuracy
              </div>
            </div>

            {/* Difficulty */}
            <div className="px-2">
              <div className="text-xs uppercase font-extrabold text-emerald-300 mb-0.5">
                Difficulty
              </div>
              <div className="text-lg md:text-xl font-black text-amber-300 capitalize font-['Fredoka']">
                {difficulty}
              </div>
              <div className="text-[10px] font-bold text-emerald-300 mt-0.5">
                {starsEarned} Star Rating
              </div>
            </div>
          </div>
        </div>

        {/* Animals Encountered Review Gallery */}
        <div className="w-full max-w-xl my-4 text-left">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-300">
              Animals Encountered ({animalsEncountered.length}) - Tap to replay sounds:
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-48 overflow-y-auto pr-1">
            {animalsEncountered.map((animal, i) => (
              <div
                key={i}
                onClick={() => soundEngine.playAnimalSound(animal.soundType)}
                className="bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-600/40 hover:border-amber-400 p-2 rounded-2xl flex items-center gap-2 cursor-pointer transition-all active:scale-95 shadow-sm group"
                title={`Replay ${animal.name} call`}
              >
                <div className="w-10 h-10 shrink-0">
                  <AnimalIllustration animalId={animal.id} className="w-full h-full" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold truncate text-white group-hover:text-amber-300 font-['Fredoka']">
                    {animal.name}
                  </div>
                  <div className="text-[10px] text-emerald-300 flex items-center gap-1">
                    <Volume2 className="w-3 h-3 text-amber-400" />
                    <span>Replay</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mt-2">
          {/* Play Again Primary Button */}
          <button
            onClick={() => {
              soundEngine.playClick();
              onPlayAgain();
            }}
            className="w-full sm:flex-1 py-4 px-6 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-emerald-950 font-black rounded-2xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 text-lg font-['Fredoka']"
          >
            <RotateCcw className="w-5 h-5 stroke-[2.5]" />
            <span>Play Again</span>
          </button>

          {/* Return to Camp Button */}
          <button
            onClick={() => {
              soundEngine.playClick();
              onReturnHome();
            }}
            className="w-full sm:w-auto py-4 px-5 bg-emerald-900/80 hover:bg-emerald-800 border border-emerald-500/40 text-emerald-100 font-bold rounded-2xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 text-base"
          >
            <Home className="w-5 h-5" />
            <span>Jungle Camp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
