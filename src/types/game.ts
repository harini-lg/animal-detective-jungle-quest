export type Difficulty = 'easy' | 'medium' | 'hard' | 'expert';

export interface Animal {
  id: string;
  name: string;
  scientificOrNickname: string;
  habitat: 'Rainforest' | 'Savanna' | 'River & Ocean' | 'Forest & Woods' | 'Farm & Meadow';
  emoji: string;
  color: string;
  accentBg: string;
  soundType: string;
  soundDescription: string;
  soundTextSound: string; // e.g. "ROOOAARRR!", "TRUUUMPET!", "RIBBIT-RIBBIT!"
  clues: [string, string, string]; // Exactly 3 clues
  funFact: string;
  diet: string;
  size: string;
  speedOrSkill: string;
  footprintType: string;
}

export interface Question {
  animal: Animal;
  options: Animal[];
  cluesRevealed: number; // 1, 2, or 3
  hintUsed: boolean;
  disabledOptionIds: string[]; // options eliminated by hint
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  dateUnlocked?: string;
}

export interface GameStats {
  score: number;
  highScore: number;
  streak: number;
  maxStreak: number;
  correctCount: number;
  totalAnswered: number;
  hintsUsedCount: number;
  starsEarned: number;
  unlockedAchievements: string[];
}

export type ScreenState = 'TITLE' | 'PLAYING' | 'FEEDBACK' | 'RESULTS' | 'FIELD_GUIDE';
