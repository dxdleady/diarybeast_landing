import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { AsciiPet } from './AsciiPet';

export function ConnectionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-[70vh] flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-6xl w-full mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 glow-text"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          How It Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-center mb-16"
          style={{ color: 'var(--text-secondary)' }}
        >
          Your Beast evolves as you journal. The more consistent you are, the stronger it becomes.
        </motion.p>

        {/* Evolution Timeline */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Day 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="beast-card text-center"
          >
            <div className="mb-4 text-sm font-bold" style={{ color: 'var(--color-primary)' }}>
              DAY 1
            </div>
            <div className="mb-6">
              <AsciiPet animal="cat" state="idle" className="ascii-text" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
              Your First Entry
            </h3>
            <p style={{ color: 'var(--text-secondary)' }} className="text-sm">
              Write your thoughts. Your Beast hatches and begins its journey with you.
            </p>
            <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
              <div className="text-sm font-mono flex items-center justify-center gap-4" style={{ color: 'var(--text-muted)' }}>
                <span>Streak: 1</span>
                <span className="flex items-center gap-0.5">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <span
                      key={i}
                      className="text-base leading-none"
                      style={{
                        color: 'var(--color-error)',
                        filter: 'drop-shadow(0 0 2px rgba(255, 23, 68, 0.6))'
                      }}
                    >
                      ♥
                    </span>
                  ))}
                </span>
                <span className="flex items-center gap-1" style={{ color: 'var(--color-tokens)' }}>
                  <img
                    src="/assets/tamagochi-coin.svg"
                    alt="DIARY"
                    className="h-4 w-4 inline"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(85%) sepia(76%) saturate(1427%) hue-rotate(359deg) brightness(102%) contrast(104%)'
                    }}
                  />
                  10
                </span>
              </div>
            </div>
          </motion.div>

          {/* Day 7 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="beast-card text-center animate-pulse-glow"
          >
            <div className="mb-4 text-sm font-bold" style={{ color: 'var(--color-accent)' }}>
              DAY 7
            </div>
            <div className="mb-6">
              <AsciiPet animal="cat" state="happy" className="ascii-text" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
              Building Consistency
            </h3>
            <p style={{ color: 'var(--text-secondary)' }} className="text-sm">
              One week of journaling. Your Beast grows stronger and more expressive.
            </p>
            <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
              <div className="text-sm font-mono flex items-center justify-center gap-4" style={{ color: 'var(--text-muted)' }}>
                <span>Streak: 7</span>
                <span className="flex items-center gap-0.5">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <span
                      key={i}
                      className="text-base leading-none"
                      style={{
                        color: 'var(--color-error)',
                        filter: 'drop-shadow(0 0 2px rgba(255, 23, 68, 0.6))'
                      }}
                    >
                      ♥
                    </span>
                  ))}
                </span>
                <span className="flex items-center gap-1" style={{ color: 'var(--color-tokens)' }}>
                  <img
                    src="/assets/tamagochi-coin.svg"
                    alt="DIARY"
                    className="h-4 w-4 inline"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(85%) sepia(76%) saturate(1427%) hue-rotate(359deg) brightness(102%) contrast(104%)'
                    }}
                  />
                  80
                </span>
              </div>
            </div>
          </motion.div>

          {/* Day 30 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="beast-card text-center"
          >
            <div className="mb-4 text-sm font-bold" style={{ color: 'var(--color-tokens)' }}>
              DAY 30+
            </div>
            <div className="mb-6">
              <AsciiPet animal="cat" state="playing" className="ascii-text" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
              Legendary Status
            </h3>
            <p style={{ color: 'var(--text-secondary)' }} className="text-sm">
              A month of reflection. Your Beast becomes legendary and unlocks special traits.
            </p>
            <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
              <div className="text-sm font-mono flex items-center justify-center gap-4" style={{ color: 'var(--text-muted)' }}>
                <span>Streak: 30</span>
                <span className="flex items-center gap-0.5">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <span
                      key={i}
                      className="text-base leading-none"
                      style={{
                        color: 'var(--color-error)',
                        filter: 'drop-shadow(0 0 2px rgba(255, 23, 68, 0.6))'
                      }}
                    >
                      ♥
                    </span>
                  ))}
                </span>
                <span className="flex items-center gap-1" style={{ color: 'var(--color-tokens)' }}>
                  <img
                    src="/assets/tamagochi-coin.svg"
                    alt="DIARY"
                    className="h-4 w-4 inline"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(85%) sepia(76%) saturate(1427%) hue-rotate(359deg) brightness(102%) contrast(104%)'
                    }}
                  />
                  500+
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Text & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-xl mb-6" style={{ color: 'var(--text-secondary)' }}>
            Start your journey today. Your Beast is waiting.
          </p>
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
      </div>
    </section>
  );
}
