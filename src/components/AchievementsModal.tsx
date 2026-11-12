import React from 'react';
import { X, Award, CheckCircle, Lock, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/animals';
import { soundEngine } from '../utils/audioEngine';

interface AchievementsModalProps {
  isOpen: boolean;
  onClose: () => void;
  unlockedAchievementIds: string[];
}

export const AchievementsModal: React.FC<AchievementsModalProps> = ({
  isOpen,
  onClose,
  unlockedAchievementIds,
}) => {
  if (!isOpen) return null;

  const totalBadges = ACHIEVEMENTS.length;
  const unlockedCount = ACHIEVEMENTS.filter((a) =>
    unlockedAchievementIds.includes(a.id)
  ).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-gradient-to-b from-emerald-900 to-green-950 border-2 border-emerald-500/50 rounded-3xl w-full max-w-xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden text-white">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-emerald-700/50 flex items-center justify-between bg-emerald-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-400 rounded-2xl text-emerald-950">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black font-['Fredoka'] text-white">
                Detective Badges & Trophies
              </h2>
              <div className="text-xs text-amber-300 font-bold">
                {unlockedCount} of {totalBadges} Badges Unlocked!
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              soundEngine.playClick();
              onClose();
            }}
            className="p-2 rounded-2xl bg-emerald-800/60 hover:bg-emerald-700 border border-emerald-600/40 text-emerald-200 transition-all active:scale-95"
            aria-label="Close badges"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Badges List */}
        <div className="p-4 overflow-y-auto max-h-[65vh] space-y-3">
          {ACHIEVEMENTS.map((badge) => {
            const isUnlocked = unlockedAchievementIds.includes(badge.id);

            return (
              <div
                key={badge.id}
                className={`p-3.5 rounded-2xl border transition-all flex items-center gap-3.5 ${
                  isUnlocked
                    ? 'bg-emerald-900/80 border-amber-400/60 shadow-lg'
                    : 'bg-emerald-950/40 border-emerald-800/40 opacity-60'
                }`}
              >
                {/* Badge Icon circle */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 border-2 ${
                    isUnlocked
                      ? 'bg-amber-400 border-white text-emerald-950 shadow-md animate-float-gentle'
                      : 'bg-emerald-950 border-emerald-700 text-emerald-600'
                  }`}
                >
                  {isUnlocked ? badge.icon : <Lock className="w-6 h-6 text-emerald-600" />}
                </div>

                {/* Badge Details */}
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center gap-2">
                    <h3
                      className={`font-black text-sm sm:text-base font-['Fredoka'] ${
                        isUnlocked ? 'text-amber-300' : 'text-emerald-300'
                      }`}
                    >
                      {badge.title}
                    </h3>
                    {isUnlocked && (
                      <span className="text-xs bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full font-bold border border-amber-300/40 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-amber-400" />
                        <span>Earned!</span>
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-emerald-100 mt-0.5 leading-snug">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-emerald-950/80 border-t border-emerald-800/50 text-center text-xs text-emerald-400">
          Play more detective rounds to unlock all safari badges!
        </div>
      </div>
    </div>
  );
};
