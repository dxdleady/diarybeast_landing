import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const asciiArt = {
  brain: `   ╔═══╗
  ╔╝░░░╚╗
 ╔╝░▓▓░░╚╗
 ║░▓██▓░░║
 ╚╗░▓▓░╔╝
  ╚════╝`,
  lock: `  ┌─────┐
  │ ▓▓▓ │
  │ ▓▓▓ │
┌─┴─────┴─┐
│ ╔═════╗ │
│ ║ ◉   ║ │
│ ╚═════╝ │
└─────────┘`,
  game: ` ╔═══════════╗
 ║ □      □ ║
 ║          ║
 ║   ╔══╗   ║
 ║ ◄ ║  ║ ► ║
 ║   ╚══╝   ║
 ║     ▼    ║
 ╚═══════════╝`
};

export function Features() {
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

  const features = [
    {
      title: 'AI Progress Analysis',
      description: 'Track your emotional patterns and mental health journey with AI-powered insights. See how you evolve over time.',
      ascii: asciiArt.brain,
      color: 'var(--color-success)',
      glow: '0 0 10px rgba(0, 255, 135, 0.3)',
      delay: 0.2,
    },
    {
      title: 'Blockchain Privacy',
      description: 'Your entries are encrypted on Base blockchain. Not even we can read them. Your thoughts, your data, forever.',
      ascii: asciiArt.lock,
      color: 'var(--color-tokens)',
      glow: '0 0 10px rgba(255, 193, 7, 0.3)',
      delay: 0.4,
    },
    {
      title: 'Gamified Routine',
      description: 'Build healthy journaling habits with your Beast companion. Earn DIARY tokens and unlock special traits.',
      ascii: asciiArt.game,
      color: 'var(--color-primary)',
      glow: '0 0 10px rgba(0, 229, 255, 0.3)',
      delay: 0.6,
    },
  ];

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
          Why DiaryBeast?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-center mb-16"
          style={{ color: 'var(--text-secondary)' }}
        >
          The only diary that combines mental health tracking, true privacy, and gamification.
        </motion.p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: feature.delay }}
              className="beast-card text-center hover:scale-105 transition-transform"
            >
              <pre
                className="text-sm mb-4 inline-block font-mono leading-tight"
                style={{ color: feature.color, textShadow: feature.glow }}
              >
                {feature.ascii}
              </pre>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                {feature.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)' }} className="text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
