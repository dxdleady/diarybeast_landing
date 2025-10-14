import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AsciiPet } from './AsciiPet';
import type { Animal, PetState } from '../lib/ascii';

const beastStates = [
  {
    name: 'Just Hatched',
    state: 'idle' as PetState,
    lives: 7,
    happiness: 50,
    description: 'Your Beast just hatched! Keep it alive by writing daily.',
  },
  {
    name: 'Happy & Healthy',
    state: 'happy' as PetState,
    lives: 7,
    happiness: 90,
    description: 'Thriving! Daily journaling keeps your Beast strong.',
  },
  {
    name: 'Hungry & Sad',
    state: 'sad' as PetState,
    lives: 3,
    happiness: 30,
    description: 'Neglected for days. Write to restore its health.',
  },
  {
    name: 'Critical Condition',
    state: 'critical' as PetState,
    lives: 1,
    happiness: 10,
    description: "Near death! One more missed day and it's over.",
  },
  {
    name: 'Dancing with Joy',
    state: 'playing' as PetState,
    lives: 7,
    happiness: 100,
    description: 'Playing and thriving! This is what consistency looks like.',
  },
  {
    name: 'Feeding Time',
    state: 'eating' as PetState,
    lives: 5,
    happiness: 70,
    description: 'Enjoying a healthy meal. Keep feeding it with your thoughts.',
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animal] = useState<Animal>('cat');

  const currentBeast = beastStates[currentIndex];

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % beastStates.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative">
      {/* Logo + Brand Name - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2"
      >
        <div
          className="relative w-16 h-16 md:w-20 md:h-20"
          style={{
            filter: 'brightness(0) saturate(100%) invert(70%) sepia(98%) saturate(2476%) hue-rotate(160deg) brightness(103%) contrast(101%) drop-shadow(0 0 15px rgba(0, 229, 255, 0.5))'
          }}
        >
          <img
            src="/assets/diary-beast-logo-mono.svg"
            alt="DiaryBeast"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-left">
          <h1
            className="text-2xl md:text-3xl font-bold leading-tight"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              color: 'var(--color-primary)',
              textShadow: '0 0 15px rgba(0, 229, 255, 0.4)'
            }}
          >
            DIARY
          </h1>
          <h1
            className="text-2xl md:text-3xl font-bold leading-tight"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              color: 'var(--color-primary)',
              textShadow: '0 0 15px rgba(0, 229, 255, 0.4)'
            }}
          >
            BEAST
          </h1>
        </div>
      </motion.div>

      {/* Launch App Button - Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-4 right-4 md:top-6 md:right-6"
      >
        <a
          href="https://diarybeast-front.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 md:px-8 md:py-4 bg-transparent hover:bg-primary/10 border border-primary rounded font-mono text-base md:text-lg transition-all font-bold text-primary"
          style={{ boxShadow: 'var(--glow-cyan)' }}
        >
          [LAUNCH APP →]
        </a>
      </motion.div>

      <div className="max-w-7xl w-full mx-auto pt-24 md:pt-32">
        {/* Headline and Description - Above Everything */}
        <div className="w-full text-center mb-12">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6 glow-text"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Write Daily. Grow Your Beast. Own Your Mind.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            Your private diary with a digital companion that evolves with you.
            <br />
            Write. Reflect. Earn DIARY tokens on Base. Your entries are encrypted—only you can read them.
          </motion.p>

          {/* Footer tagline with logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-3 text-sm flex-wrap mb-16"
            style={{ color: 'var(--text-muted)' }}
          >
            <div className="flex items-center gap-2">
              <span>Built on</span>
              <img
                src="/assets/base.png"
                alt="Base"
                className="h-4 w-auto inline-block"
              />
              <span>Base</span>
            </div>
            <span>•</span>
            <span>Your data, your rules</span>
            <span>•</span>
            <a
              href="https://mubert.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <span>Music by</span>
              <img
                src="/assets/mubert.png"
                alt="Mubert"
                className="h-4 w-auto inline-block"
              />
            </a>
          </motion.div>
        </div>

        {/* Two Column Layout: Beast Card Left, Actions Right */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Beast Card - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="beast-card max-w-md mx-auto md:mx-0 animate-float animate-pulse-glow relative"
          >
          {/* State Title */}
          <div className="mb-4 text-center">
            <h3 className="text-lg font-bold font-mono" style={{ color: 'var(--color-primary)' }}>
              {currentBeast.name}
            </h3>
            <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
              {currentBeast.description}
            </p>
          </div>

          {/* ASCII Beast */}
          <div className="mb-6">
            <AsciiPet animal={animal} state={currentBeast.state} className="ascii-text" />
          </div>

          {/* Stats */}
          <div className="space-y-3">
            {/* Lives with hearts */}
            <div className="bg-bg-lcd rounded p-3 border border-primary/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-mono font-bold" style={{ color: 'var(--color-primary)' }}>HP</span>
                <span className="text-sm font-mono font-bold" style={{
                  color: currentBeast.lives >= 5 ? 'var(--color-success)' : currentBeast.lives >= 3 ? 'var(--color-warning)' : 'var(--color-error)'
                }}>{currentBeast.lives}/7</span>
              </div>
              <div className="flex gap-1.5 justify-center">
                {Array.from({ length: 7 }).map((_, i) => {
                  const isActive = i < currentBeast.lives;
                  return (
                    <span
                      key={i}
                      className="text-2xl font-mono leading-none transition-all"
                      style={
                        isActive
                          ? {
                              color: 'var(--color-error)',
                              filter: 'drop-shadow(0 0 4px rgba(255, 23, 68, 0.6))'
                            }
                          : {
                              color: 'transparent',
                              WebkitTextStroke: '1px rgba(255,255,255,0.4)',
                            }
                      }
                    >
                      {isActive ? '♥' : '♡'}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Happiness Bar */}
            <div className="bg-bg-lcd rounded p-3 border border-primary/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-mono font-bold" style={{ color: 'var(--color-primary)' }}>JOY</span>
                <span className="text-sm font-mono font-bold" style={{
                  color: currentBeast.happiness >= 80 ? 'var(--color-success)' : currentBeast.happiness >= 60 ? 'var(--color-tokens)' : currentBeast.happiness >= 40 ? 'var(--color-warning)' : 'var(--color-error)'
                }}>{currentBeast.happiness}%</span>
              </div>
              <div className="font-mono text-xs flex items-center gap-0.5">
                <span style={{ color: 'var(--text-muted)' }}>[</span>
                <div className="flex-1 flex gap-px">
                  {Array.from({ length: 50 }).map((_, i) => {
                    const threshold = (i + 1) * 2;
                    const isActive = currentBeast.happiness >= threshold;
                    let colorClass = 'bg-inactive/30';
                    if (isActive) {
                      if (currentBeast.happiness >= 80) colorClass = 'bg-success';
                      else if (currentBeast.happiness >= 60) colorClass = 'bg-tokens';
                      else if (currentBeast.happiness >= 40) colorClass = 'bg-warning';
                      else colorClass = 'bg-error';
                    }
                    return (
                      <div
                        key={i}
                        className={`flex-1 h-2 rounded-[1px] ${colorClass} transition-colors duration-300`}
                      />
                    );
                  })}
                </div>
                <span style={{ color: 'var(--text-muted)' }}>]</span>
              </div>
            </div>

            {/* Tokens */}
            <div className="flex items-center justify-center gap-2 text-lg font-mono">
              <img
                src="/assets/tamagochi-coin.svg"
                alt="DIARY"
                className="h-6 w-6"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(85%) sepia(76%) saturate(1427%) hue-rotate(359deg) brightness(102%) contrast(104%)'
                }}
              />
              <span style={{ color: 'var(--color-tokens)', fontWeight: 'bold' }}>150 DIARY</span>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {beastStates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="w-2 h-2 rounded-full transition-all"
                style={{
                  backgroundColor: index === currentIndex ? 'var(--color-primary)' : 'var(--color-inactive)',
                  boxShadow: index === currentIndex ? 'var(--glow-cyan)' : 'none'
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* What You Can Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Centered Title */}
          <div className="text-center">
            <h3 className="text-3xl font-bold glow-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              What You Can Do
            </h3>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              {/* Feed */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-3"
              >
                <div className="flex items-center">
                  <div className="h-16 w-16 flex items-center justify-center text-5xl font-bold" style={{ color: 'var(--color-primary)' }}>♥</div>
                </div>
                <div className="flex-1">
                  <button
                    className="w-full px-3 py-2 bg-transparent hover:bg-primary/10 border border-primary/40 hover:border-primary text-primary rounded font-mono text-xs transition-all flex items-center justify-between group mb-2"
                    style={{ boxShadow: 'var(--glow-cyan)' }}
                  >
                    <span className="font-semibold">[FEED] +1♥</span>
                    <span className="text-[10px] opacity-70 group-hover:opacity-100">◆ READY</span>
                  </button>
                  <p style={{ color: 'var(--text-secondary)' }} className="text-sm">
                    Restore health by feeding. Buy food from the shop with your earned tokens.
                  </p>
                </div>
              </motion.div>

              {/* Level Up */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start gap-3"
              >
                <div className="flex items-center">
                  <img
                    src="/assets/tamagochi-achievements-daily-crypto.svg"
                    alt="Level Up"
                    className="h-16 w-16"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(70%) sepia(98%) saturate(400%) hue-rotate(80deg) brightness(103%) contrast(101%)'
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2" style={{ color: 'var(--color-success)' }}>Level Up & Evolve</h4>
                  <p style={{ color: 'var(--text-secondary)' }} className="text-sm">
                    Your Beast evolves through life stages. Each level unlocks new animations and traits.
                  </p>
                </div>
              </motion.div>

              {/* Compete */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-start gap-3"
              >
                <div className="flex items-center">
                  <img
                    src="/assets/tamagochi-leaderboard.svg"
                    alt="Leaderboard"
                    className="h-16 w-16"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(85%) sepia(76%) saturate(1427%) hue-rotate(359deg) brightness(102%) contrast(104%)'
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-bold text-lg" style={{ color: 'var(--color-streak)' }}>Compete on Leaderboard</h4>
                    <span className="text-xs font-mono px-2 py-0.5 bg-primary/20 text-primary rounded">COMING SOON</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)' }} className="text-sm">
                    Compare your streak, tokens, and Beast level with others. Climb the global rankings!
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {/* Play */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-3"
              >
                <div className="flex items-center">
                  <div className="h-16 w-16 flex items-center justify-center text-5xl font-bold" style={{ color: 'var(--color-accent)' }}>☺</div>
                </div>
                <div className="flex-1">
                  <button
                    className="w-full px-3 py-2 bg-transparent hover:bg-accent/10 border border-accent/40 hover:border-accent text-accent rounded font-mono text-xs transition-all flex items-center justify-between group mb-2"
                    style={{ boxShadow: 'var(--glow-green)' }}
                  >
                    <span className="font-semibold">[PLAY] +10☺</span>
                    <span className="text-[10px] opacity-70 group-hover:opacity-100">◆ READY</span>
                  </button>
                  <p style={{ color: 'var(--text-secondary)' }} className="text-sm">
                    Increase happiness by playing. Each play session boosts joy instantly.
                  </p>
                </div>
              </motion.div>

              {/* Earn */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start gap-3"
              >
                <div className="flex items-center">
                  <img
                    src="/assets/tamagochi-coin.svg"
                    alt="DIARY"
                    className="h-16 w-16"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(85%) sepia(76%) saturate(1427%) hue-rotate(359deg) brightness(102%) contrast(104%)'
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2" style={{ color: 'var(--color-tokens)' }}>Earn DIARY Tokens</h4>
                  <p style={{ color: 'var(--text-secondary)' }} className="text-sm">
                    Write daily entries, complete journal challenges, and maintain streaks to earn tokens.
                  </p>
                </div>
              </motion.div>

              {/* Listen Music */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-start gap-3"
              >
                <div className="flex items-center">
                  <img
                    src="/assets/tamagochi-player-mainbutton.svg"
                    alt="Music Player"
                    className="h-16 w-16"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(70%) sepia(98%) saturate(2476%) hue-rotate(160deg) brightness(103%) contrast(101%)'
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2" style={{ color: 'var(--color-primary)' }}>Listen to Music</h4>
                  <p style={{ color: 'var(--text-secondary)' }} className="text-sm">
                    Relax with AI-generated ambient music by Mubert while journaling or reflecting.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
