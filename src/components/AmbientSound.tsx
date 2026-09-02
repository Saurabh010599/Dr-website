import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export const AmbientSound: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const noiseNodeRef = useRef<AudioNode | null>(null);

  const startCafeSoundscape = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // 1. Soft Warm Vinyl / Ambient Chords (F major 7th harmonic warm pad)
      const freqs = [174.61, 220.0, 261.63, 329.63, 440.0];
      const oscs: OscillatorNode[] = [];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Low pass filter to create a warm, muffled room sound
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, ctx.currentTime);

        // Subtle slow frequency modulation (chorus/warmth)
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.2 + idx * 0.1, ctx.currentTime);
        lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
        lfo.connect(osc.frequency);
        lfo.start();

        oscGain.gain.setValueAtTime(0.04 / (idx + 1), ctx.currentTime);

        osc.connect(filter);
        filter.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();
        oscs.push(osc);
      });

      // 2. Gentle Pink Noise / Steam / Coffeehouse Hiss simulation
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(600, ctx.currentTime);
      noiseFilter.Q.setValueAtTime(0.8, ctx.currentTime);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.015, ctx.currentTime);

      whiteNoise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(masterGain);
      whiteNoise.start();

      oscillatorsRef.current = oscs;
      noiseNodeRef.current = whiteNoise;
      setIsPlaying(true);
    } catch (err) {
      console.warn('Audio context init notice:', err);
    }
  };

  const stopCafeSoundscape = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
      setTimeout(() => {
        try {
          oscillatorsRef.current.forEach((osc) => osc.stop());
          oscillatorsRef.current = [];
          if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
            audioCtxRef.current.close();
          }
        } catch {
          // ignore
        }
        setIsPlaying(false);
      }, 850);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopCafeSoundscape();
    } else {
      startCafeSoundscape();
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <button
      id="ambient-sound-toggle-btn"
      onClick={toggleSound}
      title={isPlaying ? 'Mute Cafe Soundscape' : 'Listen to Godwit Cafe Ambient Sound'}
      className={`relative group flex items-center gap-2.5 px-3.5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 border ${
        isPlaying
          ? 'bg-[#C89B3C]/20 border-[#C89B3C] text-[#C89B3C] shadow-[0_0_15px_rgba(200,155,60,0.3)]'
          : 'bg-[#1e1512]/60 border-white/10 text-[#E8D8C4]/80 hover:text-white hover:border-[#C89B3C]/40'
      }`}
    >
      <div className="relative">
        {isPlaying ? (
          <div className="flex items-center gap-0.5 h-3">
            <span className="w-0.5 bg-[#C89B3C] h-3 animate-pulse rounded-full"></span>
            <span className="w-0.5 bg-[#C89B3C] h-2 animate-bounce rounded-full"></span>
            <span className="w-0.5 bg-[#C89B3C] h-3.5 animate-pulse rounded-full"></span>
          </div>
        ) : (
          <VolumeX className="w-3.5 h-3.5" />
        )}
      </div>
      <span className="hidden sm:inline font-mono text-[10px] tracking-widest">
        {isPlaying ? 'Ambience Active' : 'Sound Atmosphere'}
      </span>
      <Sparkles className={`w-3 h-3 transition-transform duration-300 ${isPlaying ? 'rotate-12 text-[#C89B3C]' : 'opacity-40'}`} />
    </button>
  );
};
