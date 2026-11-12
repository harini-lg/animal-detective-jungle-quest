/**
 * Procedural Web Audio API sound synthesizer for Animal Detective.
 * Generates realistic and fun procedural animal calls and game sound effects
 * entirely client-side with zero external assets or latency.
 */

class AudioEngine {
  private ctx: AudioContext | null = null;
  public isMuted: boolean = false;
  public speechEnabled: boolean = true;

  constructor() {
    // AudioContext will be initialized on first user gesture
    if (typeof window !== 'undefined') {
      const savedMute = localStorage.getItem('animal_detective_muted');
      if (savedMute !== null) {
        this.isMuted = savedMute === 'true';
      }
      const savedSpeech = localStorage.getItem('animal_detective_speech');
      if (savedSpeech !== null) {
        this.speechEnabled = savedSpeech === 'true';
      }
    }
  }

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (typeof window !== 'undefined') {
      localStorage.setItem('animal_detective_muted', String(this.isMuted));
    }
    if (this.isMuted && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    return this.isMuted;
  }

  public toggleSpeech(): boolean {
    this.speechEnabled = !this.speechEnabled;
    if (typeof window !== 'undefined') {
      localStorage.setItem('animal_detective_speech', String(this.speechEnabled));
    }
    if (!this.speechEnabled && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    return this.speechEnabled;
  }

  // --- UI Sound Effects ---

  public playClick(): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(420, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  }

  public playSuccess(): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.25, now + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.35);
    });
  }

  public playWrong(): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Friendly, gentle boop-boop
    [260, 220].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.16);

      gain.gain.setValueAtTime(0.18, now + idx * 0.16);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.16 + 0.14);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.16);
      osc.stop(now + idx * 0.16 + 0.14);
    });
  }

  public playHint(): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const sparkles = [784, 988, 1175, 1568, 1976];
    sparkles.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.05);

      gain.gain.setValueAtTime(0.15, now + i * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.2);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.05);
      osc.stop(now + i * 0.05 + 0.2);
    });
  }

  public playVictoryFanfare(): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const melody = [
      { f: 523.25, d: 0.15, t: 0 },
      { f: 523.25, d: 0.15, t: 0.18 },
      { f: 523.25, d: 0.15, t: 0.36 },
      { f: 659.25, d: 0.25, t: 0.54 },
      { f: 783.99, d: 0.25, t: 0.8 },
      { f: 1046.5, d: 0.55, t: 1.05 },
    ];

    melody.forEach((note) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, now + note.t);

      gain.gain.setValueAtTime(0.28, now + note.t);
      gain.gain.exponentialRampToValueAtTime(0.001, now + note.t + note.d);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + note.t);
      osc.stop(now + note.t + note.d);
    });
  }

  // --- Procedural Animal Calls ---

  public playAnimalSound(soundType: string): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const t = ctx.currentTime;

    switch (soundType) {
      case 'lion': {
        // Guttural roar with amplitude modulation & noise sub-rumble
        const osc = ctx.createOscillator();
        const mod = ctx.createOscillator();
        const modGain = ctx.createGain();
        const mainGain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(110, t);
        osc.frequency.linearRampToValueAtTime(160, t + 0.4);
        osc.frequency.exponentialRampToValueAtTime(75, t + 1.6);

        mod.type = 'sine';
        mod.frequency.setValueAtTime(25, t);
        modGain.gain.setValueAtTime(40, t);

        mod.connect(osc.frequency);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(650, t);
        filter.frequency.exponentialRampToValueAtTime(320, t + 1.6);

        mainGain.gain.setValueAtTime(0.01, t);
        mainGain.gain.linearRampToValueAtTime(0.4, t + 0.3);
        mainGain.gain.linearRampToValueAtTime(0.35, t + 0.9);
        mainGain.gain.exponentialRampToValueAtTime(0.001, t + 1.8);

        osc.connect(filter);
        filter.connect(mainGain);
        mainGain.connect(ctx.destination);

        osc.start(t);
        mod.start(t);
        osc.stop(t + 1.8);
        mod.stop(t + 1.8);
        break;
      }

      case 'elephant': {
        // Brassy trumpet call sweeping up and vibrating down
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(260, t);
        osc.frequency.linearRampToValueAtTime(540, t + 0.25);
        osc.frequency.linearRampToValueAtTime(490, t + 0.6);
        osc.frequency.linearRampToValueAtTime(620, t + 0.9);
        osc.frequency.exponentialRampToValueAtTime(220, t + 1.5);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(900, t);
        filter.Q.setValueAtTime(3.5, t);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.45, t + 0.2);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 1.55);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + 1.55);
        break;
      }

      case 'monkey': {
        // High-pitched playful "ooh-ooh-aah-aah" staccato squeaks
        const chirps = [
          { f1: 650, f2: 950, start: 0, dur: 0.16 },
          { f1: 680, f2: 990, start: 0.2, dur: 0.16 },
          { f1: 820, f2: 1250, start: 0.44, dur: 0.22 },
          { f1: 850, f2: 1300, start: 0.72, dur: 0.28 },
        ];

        chirps.forEach((c) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(c.f1, t + c.start);
          osc.frequency.linearRampToValueAtTime(c.f2, t + c.start + c.dur * 0.5);
          osc.frequency.linearRampToValueAtTime(c.f1 * 0.8, t + c.start + c.dur);

          gain.gain.setValueAtTime(0.01, t + c.start);
          gain.gain.linearRampToValueAtTime(0.35, t + c.start + 0.03);
          gain.gain.exponentialRampToValueAtTime(0.001, t + c.start + c.dur);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(t + c.start);
          osc.stop(t + c.start + c.dur);
        });
        break;
      }

      case 'tiger': {
        // Deep vibrating growl with sub-bass and snarl
        const osc = ctx.createOscillator();
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(95, t);
        osc.frequency.linearRampToValueAtTime(140, t + 0.4);
        osc.frequency.exponentialRampToValueAtTime(65, t + 1.7);

        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(32, t);
        lfoGain.gain.setValueAtTime(25, t);
        lfo.connect(osc.frequency);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(550, t);
        filter.frequency.exponentialRampToValueAtTime(240, t + 1.7);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.4, t + 0.35);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 1.7);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        lfo.start(t);
        osc.stop(t + 1.7);
        lfo.stop(t + 1.7);
        break;
      }

      case 'frog': {
        // Characteristic double croak "ribbit-ribbit"
        const pulses = [0, 0.32];
        pulses.forEach((offset) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const filter = ctx.createBiquadFilter();

          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(190, t + offset);
          osc.frequency.linearRampToValueAtTime(280, t + offset + 0.12);
          osc.frequency.exponentialRampToValueAtTime(160, t + offset + 0.24);

          filter.type = 'bandpass';
          filter.frequency.setValueAtTime(420, t + offset);
          filter.Q.setValueAtTime(4.0, t + offset);

          gain.gain.setValueAtTime(0.01, t + offset);
          gain.gain.linearRampToValueAtTime(0.38, t + offset + 0.04);
          gain.gain.exponentialRampToValueAtTime(0.001, t + offset + 0.25);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);

          osc.start(t + offset);
          osc.stop(t + offset + 0.25);
        });
        break;
      }

      case 'owl': {
        // Melodic hollow "Hoo... hoo-hooo!"
        const hoots = [
          { f: 380, start: 0, dur: 0.35 },
          { f: 340, start: 0.45, dur: 0.18 },
          { f: 395, start: 0.68, dur: 0.55 },
        ];

        hoots.forEach((h) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(h.f, t + h.start);
          osc.frequency.exponentialRampToValueAtTime(h.f * 0.9, t + h.start + h.dur);

          gain.gain.setValueAtTime(0.001, t + h.start);
          gain.gain.linearRampToValueAtTime(0.32, t + h.start + 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, t + h.start + h.dur);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(t + h.start);
          osc.stop(t + h.start + h.dur);
        });
        break;
      }

      case 'wolf': {
        // Long haunting wolf howl rising and descending smoothly
        const osc = ctx.createOscillator();
        const vibrato = ctx.createOscillator();
        const vibGain = ctx.createGain();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(290, t);
        osc.frequency.exponentialRampToValueAtTime(580, t + 0.8);
        osc.frequency.linearRampToValueAtTime(540, t + 1.4);
        osc.frequency.exponentialRampToValueAtTime(260, t + 2.2);

        vibrato.type = 'sine';
        vibrato.frequency.setValueAtTime(5, t);
        vibGain.gain.setValueAtTime(14, t);
        vibrato.connect(osc.frequency);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.35, t + 0.5);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 2.3);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        vibrato.start(t);
        osc.stop(t + 2.3);
        vibrato.stop(t + 2.3);
        break;
      }

      case 'dolphin': {
        // High click bursts followed by a rising whistle
        // Whistle
        const whistle = ctx.createOscillator();
        const wGain = ctx.createGain();
        whistle.type = 'sine';
        whistle.frequency.setValueAtTime(2200, t);
        whistle.frequency.linearRampToValueAtTime(3400, t + 0.3);
        whistle.frequency.linearRampToValueAtTime(2600, t + 0.6);
        whistle.frequency.linearRampToValueAtTime(3200, t + 0.9);

        wGain.gain.setValueAtTime(0.01, t);
        wGain.gain.linearRampToValueAtTime(0.2, t + 0.1);
        wGain.gain.exponentialRampToValueAtTime(0.001, t + 1.0);

        whistle.connect(wGain);
        wGain.connect(ctx.destination);
        whistle.start(t);
        whistle.stop(t + 1.0);
        break;
      }

      case 'duck': {
        // Classic comic "Quack-quack!"
        [0, 0.28].forEach((offset) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const filter = ctx.createBiquadFilter();

          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(360, t + offset);
          osc.frequency.exponentialRampToValueAtTime(220, t + offset + 0.22);

          filter.type = 'bandpass';
          filter.frequency.setValueAtTime(680, t + offset);
          filter.Q.setValueAtTime(4.5, t + offset);

          gain.gain.setValueAtTime(0.01, t + offset);
          gain.gain.linearRampToValueAtTime(0.38, t + offset + 0.04);
          gain.gain.exponentialRampToValueAtTime(0.001, t + offset + 0.24);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);

          osc.start(t + offset);
          osc.stop(t + offset + 0.24);
        });
        break;
      }

      case 'cow': {
        // Warm resonant "Moo-ooo"
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(115, t);
        osc.frequency.linearRampToValueAtTime(125, t + 0.3);
        osc.frequency.exponentialRampToValueAtTime(95, t + 1.5);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(400, t);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.35, t + 0.2);
        gain.gain.linearRampToValueAtTime(0.3, t + 1.0);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 1.6);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + 1.6);
        break;
      }

      case 'rooster': {
        // 4-syllable "Cock-a-doodle-doooo!"
        const notes = [
          { f: 440, start: 0, dur: 0.14 },
          { f: 520, start: 0.16, dur: 0.14 },
          { f: 490, start: 0.32, dur: 0.14 },
          { f: 659, start: 0.48, dur: 0.75 },
        ];

        notes.forEach((n) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(n.f, t + n.start);
          if (n.dur > 0.4) {
            osc.frequency.linearRampToValueAtTime(n.f * 1.1, t + n.start + 0.3);
            osc.frequency.exponentialRampToValueAtTime(n.f * 0.85, t + n.start + n.dur);
          }

          gain.gain.setValueAtTime(0.01, t + n.start);
          gain.gain.linearRampToValueAtTime(0.3, t + n.start + 0.03);
          gain.gain.exponentialRampToValueAtTime(0.001, t + n.start + n.dur);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(t + n.start);
          osc.stop(t + n.start + n.dur);
        });
        break;
      }

      case 'sheep': {
        // Vibrato flutter "Baaa-aaa-aaa"
        const osc = ctx.createOscillator();
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, t);

        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(14, t);
        lfoGain.gain.setValueAtTime(18, t);
        lfo.connect(osc.frequency);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(650, t);
        filter.Q.setValueAtTime(3.0, t);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.35, t + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 1.2);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        lfo.start(t);
        osc.stop(t + 1.2);
        lfo.stop(t + 1.2);
        break;
      }

      case 'bear': {
        // Heavy guttural bear grumble
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(85, t);
        osc.frequency.linearRampToValueAtTime(115, t + 0.4);
        osc.frequency.exponentialRampToValueAtTime(55, t + 1.5);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(340, t);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.42, t + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 1.5);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + 1.5);
        break;
      }

      case 'snake': {
        // Sibilant hiss created using filtered noise
        const bufferSize = ctx.sampleRate * 1.3;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(3600, t);
        filter.Q.setValueAtTime(3.0, t);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.32, t + 0.15);
        gain.gain.linearRampToValueAtTime(0.28, t + 0.8);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 1.3);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        noise.start(t);
        noise.stop(t + 1.3);
        break;
      }

      case 'zebra': {
        // High-pitched playful braying bark
        const barks = [0, 0.22, 0.46];
        barks.forEach((start) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(450, t + start);
          osc.frequency.linearRampToValueAtTime(620, t + start + 0.08);
          osc.frequency.exponentialRampToValueAtTime(300, t + start + 0.18);

          gain.gain.setValueAtTime(0.01, t + start);
          gain.gain.linearRampToValueAtTime(0.3, t + start + 0.03);
          gain.gain.exponentialRampToValueAtTime(0.001, t + start + 0.18);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(t + start);
          osc.stop(t + start + 0.18);
        });
        break;
      }

      case 'kangaroo': {
        // Rhythmic thumping bounce + soft tongue click
        [0, 0.28, 0.56].forEach((st, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(140 + i * 20, t + st);
          osc.frequency.exponentialRampToValueAtTime(60, t + st + 0.14);

          gain.gain.setValueAtTime(0.4, t + st);
          gain.gain.exponentialRampToValueAtTime(0.001, t + st + 0.15);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(t + st);
          osc.stop(t + st + 0.15);
        });
        break;
      }

      case 'parrot': {
        // Tropical colorful screech and cheer whistle
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(1400, t);
        osc.frequency.linearRampToValueAtTime(2200, t + 0.18);
        osc.frequency.linearRampToValueAtTime(1100, t + 0.35);
        osc.frequency.linearRampToValueAtTime(1800, t + 0.5);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.3, t + 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.6);
        break;
      }

      case 'hippo': {
        // Deep water chuff and belly rumble
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(80, t);
        osc.frequency.exponentialRampToValueAtTime(45, t + 1.2);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(260, t);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.4, t + 0.2);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 1.2);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + 1.2);
        break;
      }

      case 'crocodile': {
        // Low menacing throat rumble and jaw snap
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(70, t);
        osc.frequency.linearRampToValueAtTime(110, t + 0.3);
        osc.frequency.exponentialRampToValueAtTime(40, t + 1.1);

        gain.gain.setValueAtTime(0.35, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 1.1);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 1.1);
        break;
      }

      case 'cat': {
        // Sweet playful "Mee-oww" pitch glide
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, t);
        osc.frequency.linearRampToValueAtTime(780, t + 0.3);
        osc.frequency.exponentialRampToValueAtTime(320, t + 0.9);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.32, t + 0.2);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.95);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.95);
        break;
      }

      case 'dog': {
        // Energetic double bark "Woof-Woof!"
        [0, 0.3].forEach((offset) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(380, t + offset);
          osc.frequency.exponentialRampToValueAtTime(140, t + offset + 0.2);

          gain.gain.setValueAtTime(0.01, t + offset);
          gain.gain.linearRampToValueAtTime(0.36, t + offset + 0.03);
          gain.gain.exponentialRampToValueAtTime(0.001, t + offset + 0.22);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(t + offset);
          osc.stop(t + offset + 0.22);
        });
        break;
      }

      case 'horse': {
        // Spirited whinny with fast vibrato
        const osc = ctx.createOscillator();
        const vib = ctx.createOscillator();
        const vibGain = ctx.createGain();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(620, t);
        osc.frequency.linearRampToValueAtTime(950, t + 0.3);
        osc.frequency.linearRampToValueAtTime(740, t + 0.8);
        osc.frequency.exponentialRampToValueAtTime(350, t + 1.4);

        vib.type = 'sine';
        vib.frequency.setValueAtTime(18, t);
        vibGain.gain.setValueAtTime(45, t);
        vib.connect(osc.frequency);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.35, t + 0.2);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 1.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        vib.start(t);
        osc.stop(t + 1.4);
        vib.stop(t + 1.4);
        break;
      }

      case 'bee': {
        // Continuous happy buzzing
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(240, t);
        osc.frequency.linearRampToValueAtTime(280, t + 0.4);
        osc.frequency.linearRampToValueAtTime(230, t + 0.8);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.25, t + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 1.0);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 1.0);
        break;
      }

      case 'pig': {
        // Rhythmic snorting "Oink-Oink"
        [0, 0.24].forEach((offset) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(230, t + offset);
          osc.frequency.linearRampToValueAtTime(340, t + offset + 0.08);
          osc.frequency.exponentialRampToValueAtTime(150, t + offset + 0.18);

          gain.gain.setValueAtTime(0.32, t + offset);
          gain.gain.exponentialRampToValueAtTime(0.001, t + offset + 0.19);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(t + offset);
          osc.stop(t + offset + 0.19);
        });
        break;
      }

      case 'penguin': {
        // Arctic chirpy honk
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(540, t);
        osc.frequency.linearRampToValueAtTime(780, t + 0.15);
        osc.frequency.exponentialRampToValueAtTime(420, t + 0.45);

        gain.gain.setValueAtTime(0.28, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.45);
        break;
      }

      default: {
        // Fallback friendly chirp
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(500, t);
        osc.frequency.exponentialRampToValueAtTime(250, t + 0.4);
        gain.gain.setValueAtTime(0.3, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.4);
        break;
      }
    }
  }

  // --- Web Speech API (Child-Friendly Text-to-Speech) ---

  public speak(text: string, onEnd?: () => void): void {
    if (this.isMuted || !this.speechEnabled) return;
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel(); // cancel any ongoing speech

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95; // slightly slower for young kids
    utterance.pitch = 1.15; // friendly, upbeat pitch
    utterance.lang = 'en-US';

    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
    }

    window.speechSynthesis.speak(utterance);
  }

  public stopSpeech(): void {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

export const soundEngine = new AudioEngine();
