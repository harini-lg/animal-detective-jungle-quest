import React from 'react';
import { Volume2, VolumeX, Sparkles, BookOpen, Award, Compass, Search } from 'lucide-react';
import { AnimalIllustration } from './AnimalIllustration';
import { Difficulty } from '../types/game';
import { DIFFICULTY_SETTINGS } from '../data/animals';
import { soundEngine } from '../utils/audioEngine';

interface TitleScreenProps {
  difficulty: Difficulty;
  onSelectDifficulty: (d: Difficulty) => void;
  onStartGame: () => void;
  onOpenFieldGuide: () => void;
  onOpenAchievements: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  highScore: number;
  starsTotal: number;
}

export const TitleScreen: React.FC<TitleScreenProps> = ({
  difficulty,
  onSelectDifficulty,
  onStartGame,
  onOpenFieldGuide,
  onOpenAchievements,
  isMuted,
  onToggleMute,
  highScore,
  starsTotal,
}) => {
  const currentDiff = DIFFICULTY_SETTINGS[difficulty];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-emerald-800 via-emerald-700 to-green-900 text-white flex flex-col justify-between selection:bg-amber-300 selection:text-emerald-950">
      {/* Background Jungle Vines & Leaves Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Sunbeam glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top Jungle Canopy Foliage SVG */}
        <svg
          viewBox="0 0 1440 240"
          className="w-full absolute top-0 left-0 text-emerald-950/40 opacity-80"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,80 Q1200,160 960,90 Q720,20 480,120 Q240,180 0,60 Z"
            fill="currentColor"
          />
        </svg>

        {/* Left Hanging Vine with Sway */}
        <div className="absolute -top-6 left-4 md:left-12 animate-sway-slow origin-top">
          <svg width="80" height="240" viewBox="0 0 80 240" fill="none">
            <path
              d="M40 0 Q20 60 45 120 Q60 180 30 240"
              stroke="#166534"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Leaves */}
            <path d="M40 40 Q15 35 25 55 Z" fill="#22C55E" />
            <path d="M43 90 Q68 85 58 105 Z" fill="#4ADE80" />
            <path d="M50 150 Q20 145 35 165 Z" fill="#16A34A" />
            <path d="M35 200 Q65 195 50 215 Z" fill="#22C55E" />
          </svg>
        </div>

        {/* Right Hanging Vine */}
        <div className="absolute -top-4 right-6 md:right-16 animate-sway-reverse origin-top">
          <svg width="90" height="260" viewBox="0 0 90 260" fill="none">
            <path
              d="M45 0 Q70 70 35 140 Q15 210 50 260"
              stroke="#15803D"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path d="M46 50 Q75 40 65 65 Z" fill="#4ADE80" />
            <path d="M38 110 Q10 100 25 125 Z" fill="#22C55E" />
            <path d="M28 175 Q60 165 48 190 Z" fill="#16A34A" />
          </svg>
        </div>

        {/* Floating Jungle Fireflies / Sparkles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-amber-300 rounded-full blur-[1px] animate-pulse opacity-70" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-yellow-200 rounded-full blur-[1px] animate-pulse opacity-80" />
        <div className="absolute bottom-1/3 left-1/6 w-3 h-3 bg-lime-300 rounded-full blur-[1px] animate-pulse opacity-60" />
        <div className="absolute bottom-1/4 right-1/5 w-2.5 h-2.5 bg-amber-200 rounded-full blur-[1px] animate-pulse opacity-75" />
      </div>

      {/* Top Bar Navigation */}
      <header className="relative z-10 max-w-5xl mx-auto w-full px-4 pt-4 md:pt-6 flex items-center justify-between">
        {/* High Score & Stars Badge */}
        <div className="flex items-center gap-3 bg-emerald-950/60 backdrop-blur-md border border-emerald-500/30 rounded-2xl px-4 py-2 shadow-lg">
          <div className="flex items-center gap-1.5 text-amber-300 font-bold text-sm md:text-base">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>High Score:</span>
            <span className="font-mono text-white text-base md:text-lg">{highScore}</span>
          </div>
          <span className="text-emerald-400/40">|</span>
          <div className="flex items-center gap-1 text-amber-300 font-bold text-sm md:text-base">
            <span>⭐</span>
            <span className="font-mono text-white text-base md:text-lg">{starsTotal}</span>
          </div>
        </div>

        {/* Action Buttons: Sound & Guide */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              soundEngine.playClick();
              onOpenAchievements();
            }}
            className="p-2.5 md:px-3 md:py-2 rounded-2xl bg-emerald-900/80 hover:bg-emerald-800 border border-emerald-500/40 text-amber-200 font-semibold text-sm flex items-center gap-1.5 transition-all shadow-md active:scale-95"
            title="Badges & Achievements"
            aria-label="View badges"
          >
            <Award className="w-5 h-5 text-amber-300" />
            <span className="hidden sm:inline">Badges</span>
          </button>

          <button
            onClick={() => {
              soundEngine.playClick();
              onOpenFieldGuide();
            }}
            className="p-2.5 md:px-3 md:py-2 rounded-2xl bg-amber-500 hover:bg-amber-400 border border-amber-300 text-emerald-950 font-bold text-sm flex items-center gap-1.5 transition-all shadow-md active:scale-95"
            title="Interactive Soundbook"
            aria-label="Open Animal Soundbook"
          >
            <BookOpen className="w-5 h-5 text-emerald-950" />
            <span className="hidden sm:inline">Soundbook</span>
          </button>

          <button
            onClick={onToggleMute}
            className={`p-2.5 rounded-2xl border transition-all shadow-md active:scale-95 ${
              isMuted
                ? 'bg-rose-900/80 border-rose-500/40 text-rose-200'
                : 'bg-emerald-900/80 border-emerald-500/40 text-emerald-200 hover:bg-emerald-800'
            }`}
            title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
            aria-label="Toggle mute"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Main Content Hero */}
      <main className="relative z-10 max-w-4xl mx-auto w-full px-4 py-4 md:py-8 flex flex-col items-center text-center">
        {/* Animated Cute Jungle Animal Mascot Row */}
        <div className="relative w-full max-w-md flex items-center justify-center gap-2 md:gap-4 my-2">
          {/* Peeking Monkey */}
          <div
            className="w-20 h-20 md:w-24 md:h-24 cursor-pointer transform -rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-300"
            onClick={() => soundEngine.playAnimalSound('monkey')}
            title="Click to hear monkey!"
          >
            <div className="bg-amber-100 rounded-3xl p-1.5 shadow-xl border-4 border-amber-300">
              <AnimalIllustration animalId="monkey" className="w-full h-full" animated />
            </div>
          </div>

          {/* Central Lion Mascot with Detective Magnifying Glass Badge */}
          <div
            className="relative w-28 h-28 md:w-36 md:h-36 cursor-pointer transform hover:scale-105 transition-all duration-300"
            onClick={() => soundEngine.playAnimalSound('lion')}
            title="Click to hear lion roar!"
          >
            <div className="bg-gradient-to-br from-amber-200 to-amber-100 rounded-full p-2 shadow-2xl border-4 border-amber-400">
              <AnimalIllustration animalId="lion" className="w-full h-full" animated />
            </div>
            {/* Detective Hat / Magnifying Glass badge */}
            <div className="absolute -bottom-2 -right-1 bg-amber-400 text-emerald-950 p-2 rounded-2xl shadow-lg border-2 border-white flex items-center justify-center">
              <Search className="w-5 h-5 stroke-[3]" />
            </div>
          </div>

          {/* Peeking Elephant */}
          <div
            className="w-20 h-20 md:w-24 md:h-24 cursor-pointer transform rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-300"
            onClick={() => soundEngine.playAnimalSound('elephant')}
            title="Click to hear elephant trumpet!"
          >
            <div className="bg-slate-100 rounded-3xl p-1.5 shadow-xl border-4 border-cyan-300">
              <AnimalIllustration animalId="elephant" className="w-full h-full" animated />
            </div>
          </div>
        </div>

        {/* Title Lockup */}
        <div className="my-2 md:my-3">
          <div className="inline-flex items-center gap-2 bg-amber-400/90 text-emerald-950 px-3.5 py-1 rounded-full text-xs md:text-sm font-extrabold uppercase tracking-wider mb-2 shadow-sm">
            <Compass className="w-4 h-4" />
            <span>Wild Sound Expedition</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] font-['Fredoka']">
            ANIMAL <span className="text-amber-300">DETECTIVE</span>
          </h1>

          <p className="mt-2 text-base md:text-lg text-emerald-100 max-w-xl mx-auto font-medium leading-relaxed">
            Put on your detective hat! Listen to mystery sounds, discover jungle clues, and track down wild animals!
          </p>
        </div>

        {/* Difficulty Level Picker */}
        <div className="w-full max-w-xl my-4 bg-emerald-950/60 backdrop-blur-md rounded-3xl p-4 md:p-5 border border-emerald-500/30 shadow-2xl">
          <div className="flex items-center justify-between mb-3 px-1 text-left">
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-emerald-300">
              Select Your Mission Level:
            </span>
            <span className="text-xs font-semibold text-amber-300">
              {currentDiff.subtitle}
            </span>
          </div>

          {/* 4 Difficulty Options */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
            {(['easy', 'medium', 'hard', 'expert'] as Difficulty[]).map((level) => {
              const info = DIFFICULTY_SETTINGS[level];
              const isSelected = difficulty === level;
              const icons = {
                easy: '🐾',
                medium: '🌿',
                hard: '🧭',
                expert: '🏆',
              };

              return (
                <button
                  key={level}
                  onClick={() => {
                    soundEngine.playClick();
                    onSelectDifficulty(level);
                  }}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-200 border-2 text-center active:scale-95 ${
                    isSelected
                      ? 'bg-amber-400 text-emerald-950 border-white shadow-lg scale-102 font-bold'
                      : 'bg-emerald-900/60 hover:bg-emerald-800/80 text-white border-emerald-600/40 hover:border-emerald-400'
                  }`}
                >
                  <span className="text-2xl mb-1">{icons[level]}</span>
                  <span className="text-sm font-extrabold capitalize">{info.title}</span>
                  <span className={`text-[11px] ${isSelected ? 'text-emerald-900 font-semibold' : 'text-emerald-300'}`}>
                    {info.questionsCount} Mysteries
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Big Juicy PLAY NOW CTA Button */}
        <div className="relative mt-2 mb-4 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition duration-300 animate-pulse-ring" />
          <button
            onClick={() => {
              soundEngine.playClick();
              onStartGame();
            }}
            className="relative px-8 py-4 md:px-12 md:py-5 bg-gradient-to-b from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 active:translate-y-1 text-emerald-950 font-black text-xl md:text-2xl rounded-2xl shadow-[0_8px_0_#b45309] active:shadow-[0_2px_0_#b45309] transition-all flex items-center gap-3 uppercase tracking-wide font-['Fredoka']"
          >
            <span>Play Now</span>
            <span className="text-2xl">🦁</span>
          </button>
        </div>

        {/* Quick Fun Animal Sound Preview strip for kids */}
        <div className="mt-2 flex items-center justify-center gap-2 flex-wrap text-xs text-emerald-200">
          <span className="font-semibold text-amber-300">Tap to hear:</span>
          {[
            { id: 'frog', label: 'Frog 🐸' },
            { id: 'parrot', label: 'Parrot 🦜' },
            { id: 'duck', label: 'Duck 🦆' },
            { id: 'wolf', label: 'Wolf 🐺' },
            { id: 'cow', label: 'Cow 🐄' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => soundEngine.playAnimalSound(item.id)}
              className="px-2.5 py-1 rounded-full bg-emerald-900/70 hover:bg-emerald-800 text-emerald-100 border border-emerald-600/40 hover:border-amber-400 transition-all active:scale-95 text-xs font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>
      </main>

      {/* Jungle Grass & Floral Footer Baseline */}
      <footer className="relative z-10 w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          className="w-full text-emerald-950 opacity-90 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C150,90 350,30 500,70 C650,110 800,40 1000,80 C1200,120 1350,50 1440,70 L1440,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
        <div className="bg-emerald-950 py-3 text-center text-xs text-emerald-400/80 px-4">
          Animal Detective · Designed for young explorers aged 5–12 · 24 Wild Animals to Discover
        </div>
      </footer>
    </div>
  );
};
