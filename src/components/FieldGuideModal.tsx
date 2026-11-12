import React, { useState } from 'react';
import { X, Volume2, Search, Sparkles, Filter, Info, Heart } from 'lucide-react';
import { Animal } from '../types/game';
import { ANIMALS } from '../data/animals';
import { AnimalIllustration } from './AnimalIllustration';
import { soundEngine } from '../utils/audioEngine';

interface FieldGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FieldGuideModal: React.FC<FieldGuideModalProps> = ({ isOpen, onClose }) => {
  const [selectedHabitat, setSelectedHabitat] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeAnimal, setActiveAnimal] = useState<Animal>(ANIMALS[0]);
  const [playingId, setPlayingId] = useState<string | null>(null);

  if (!isOpen) return null;

  const habitats = ['All', 'Rainforest', 'Savanna', 'River & Ocean', 'Forest & Woods', 'Farm & Meadow'];

  const filteredAnimals = ANIMALS.filter((a) => {
    const matchesHabitat = selectedHabitat === 'All' || a.habitat === selectedHabitat;
    const matchesSearch =
      a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.habitat.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.scientificOrNickname.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesHabitat && matchesSearch;
  });

  const handlePlaySound = (animal: Animal) => {
    setPlayingId(animal.id);
    soundEngine.playAnimalSound(animal.soundType);
    setTimeout(() => {
      setPlayingId(null);
    }, 1600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-emerald-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-gradient-to-b from-emerald-900 to-green-950 border-2 border-emerald-500/50 rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-white">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-emerald-700/50 flex items-center justify-between bg-emerald-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-400 rounded-2xl text-emerald-950">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-['Fredoka'] text-white">
                Wild Animal Soundbook & Field Guide
              </h2>
              <p className="text-xs text-emerald-300">
                Explore all 24 wild creatures, listen to their authentic calls, and learn their secrets!
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundEngine.playClick();
              onClose();
            }}
            className="p-2 rounded-2xl bg-emerald-800/60 hover:bg-emerald-700 border border-emerald-600/40 text-emerald-200 transition-all active:scale-95"
            aria-label="Close soundbook"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-3 sm:p-4 bg-emerald-950/40 border-b border-emerald-800/50 flex flex-col sm:flex-row gap-2.5 items-center justify-between">
          {/* Habitat Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            {habitats.map((hab) => (
              <button
                key={hab}
                onClick={() => {
                  soundEngine.playClick();
                  setSelectedHabitat(hab);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedHabitat === hab
                    ? 'bg-amber-400 text-emerald-950 shadow-md'
                    : 'bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/40'
                }`}
              >
                {hab}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-48">
            <Search className="w-4 h-4 text-emerald-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search animals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-emerald-900/70 border border-emerald-600/40 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-emerald-400/60 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Modal Main Content: Split layout with Animal Grid + Detail Spotlight */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-emerald-800/50">
          {/* Left Grid: Animal Cards */}
          <div className="md:col-span-7 p-3 sm:p-4 overflow-y-auto max-h-[46vh] md:max-h-[60vh] grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {filteredAnimals.map((animal) => {
              const isSelected = activeAnimal.id === animal.id;
              const isPlaying = playingId === animal.id;

              return (
                <div
                  key={animal.id}
                  onClick={() => {
                    soundEngine.playClick();
                    setActiveAnimal(animal);
                  }}
                  className={`p-2.5 rounded-2xl border transition-all cursor-pointer flex flex-col items-center text-center relative group active:scale-95 ${
                    isSelected
                      ? 'bg-emerald-800/90 border-amber-400 ring-2 ring-amber-400/40 shadow-lg'
                      : 'bg-emerald-950/60 hover:bg-emerald-900/60 border-emerald-700/40'
                  }`}
                >
                  {/* Quick Play Sound Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlaySound(animal);
                    }}
                    className={`absolute top-2 right-2 p-1.5 rounded-full border transition-all shadow-sm ${
                      isPlaying
                        ? 'bg-amber-400 text-emerald-950 border-white animate-bounce'
                        : 'bg-emerald-900/80 hover:bg-amber-400 hover:text-emerald-950 border-emerald-600/40 text-emerald-200'
                    }`}
                    title={`Play ${animal.name} sound`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>

                  <div className="w-16 h-16 my-1">
                    <AnimalIllustration animalId={animal.id} className="w-full h-full" animated />
                  </div>

                  <div className="font-extrabold text-xs sm:text-sm font-['Fredoka'] text-white group-hover:text-amber-300 truncate w-full">
                    {animal.name}
                  </div>
                  <div className="text-[10px] text-emerald-300 truncate">
                    {animal.habitat}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Spotlight: Detailed Inspector for Selected Animal */}
          <div className="md:col-span-5 p-4 sm:p-5 overflow-y-auto max-h-[46vh] md:max-h-[60vh] bg-emerald-950/40 flex flex-col justify-between">
            <div>
              {/* Header with Illustration */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-20 h-20 bg-emerald-900/80 p-1.5 rounded-2xl border-2 border-amber-400/60 shadow-lg">
                  <AnimalIllustration animalId={activeAnimal.id} className="w-full h-full" animated />
                </div>
                <div>
                  <h3 className="text-xl font-black font-['Fredoka'] text-amber-300">
                    {activeAnimal.name}
                  </h3>
                  <div className="text-xs text-emerald-200 font-semibold italic">
                    "{activeAnimal.scientificOrNickname}"
                  </div>
                  <div className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-emerald-800 text-[10px] font-bold text-emerald-200 border border-emerald-600/40">
                    {activeAnimal.habitat}
                  </div>
                </div>
              </div>

              {/* Play Sound Button */}
              <button
                onClick={() => handlePlaySound(activeAnimal)}
                className={`w-full py-2.5 px-4 rounded-2xl border-2 font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 mb-3 ${
                  playingId === activeAnimal.id
                    ? 'bg-amber-400 border-white text-emerald-950 scale-102'
                    : 'bg-emerald-700 hover:bg-emerald-600 border-emerald-400 text-white'
                }`}
              >
                <Volume2 className="w-4 h-4" />
                <span>
                  {playingId === activeAnimal.id ? 'Playing Call...' : `Listen to Sound (${activeAnimal.soundTextSound})`}
                </span>
              </button>

              {/* 3 Clues breakdown */}
              <div className="space-y-2 mb-3 text-left">
                <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-300">
                  Detective Dossier:
                </div>
                {activeAnimal.clues.map((clue, idx) => (
                  <div key={idx} className="bg-emerald-900/60 p-2.5 rounded-xl border border-emerald-700/40 text-xs text-emerald-100">
                    <span className="font-bold text-amber-300 mr-1">Clue #{idx + 1}:</span>
                    <span>{clue}</span>
                  </div>
                ))}
              </div>

              {/* Fun Fact Callout */}
              <div className="bg-amber-400/10 border border-amber-400/30 p-2.5 rounded-xl text-left">
                <div className="text-xs font-extrabold text-amber-300 flex items-center gap-1 mb-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Jungle Secret:</span>
                </div>
                <p className="text-xs text-emerald-100 italic">
                  {activeAnimal.funFact}
                </p>
              </div>
            </div>

            {/* Quick stats footer */}
            <div className="grid grid-cols-2 gap-2 text-[11px] text-emerald-300 mt-3 pt-3 border-t border-emerald-800/50">
              <div>
                <span className="text-emerald-400">Diet:</span> <span className="text-white font-medium">{activeAnimal.diet}</span>
              </div>
              <div>
                <span className="text-emerald-400">Size:</span> <span className="text-white font-medium">{activeAnimal.size}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
