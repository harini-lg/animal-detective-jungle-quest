import confetti from 'canvas-confetti';

export function fireCelebrationConfetti() {
  if (typeof window === 'undefined') return;

  // Multi-angle burst for kids victory
  const count = 180;
  const defaults = {
    origin: { y: 0.65 },
    zIndex: 9999,
    colors: ['#22c55e', '#eab308', '#f97316', '#3b82f6', '#ec4899', '#a855f7'],
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 30,
    startVelocity: 45,
  });

  fire(0.2, {
    spread: 60,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 1.1,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.3,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 40,
  });
}

export function fireStarBurst() {
  if (typeof window === 'undefined') return;

  confetti({
    particleCount: 50,
    spread: 70,
    origin: { y: 0.6 },
    shapes: ['star', 'circle'],
    colors: ['#facc15', '#f59e0b', '#fbbf24', '#22c55e'],
    zIndex: 9999,
  });
}
