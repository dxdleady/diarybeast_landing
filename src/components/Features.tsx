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
      description: 'Track your emotional patterns and mental health journey with AI-powered insights.',
      ascii: asciiArt.brain,
      color: 'var(--color-success)',
      glow: '0 0 10px rgba(0, 255, 135, 0.3)',
      delay: 0.2,
      points: [
        'Weekly emotion analysis',
        'Pattern recognition over time',
        'Personalized insights',
        'Progress visualization'
      ],
    },
    {
      title: 'Blockchain Privacy',
      description: 'Your entries are encrypted on Base blockchain. Not even we can read them.',
      ascii: asciiArt.lock,
      color: 'var(--color-tokens)',
      glow: '0 0 10px rgba(255, 193, 7, 0.3)',
      delay: 0.4,
      points: [
        'End-to-end encryption',
        'Decentralized on Base L2',
        'Zero-knowledge architecture',
        'Your data, forever yours'
      ],
    },
    {
      title: 'Gamified Routine',
      description: 'Build healthy journaling habits with your Beast companion. Earn rewards and evolve together.',
      ascii: asciiArt.game,
      color: 'var(--color-primary)',
      glow: '0 0 10px rgba(0, 229, 255, 0.3)',
      delay: 0.6,
      points: [
        'Earn DIARY tokens on Base',
        'Evolve your Beast companion',
        'Low gas fees on L2',
        'Unlock special traits & rewards'
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-[70vh] flex items-center justify-center px-6 py-24"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-center mb-16"
          style={{ color: 'var(--text-secondary)' }}
        >
          <span>The only diary that combines mental health tracking, true privacy, and gamification on </span>
          <a
            href="https://base.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-primary transition-colors group mx-1"
          >
            <img
              src="/assets/base.png"
              alt="Base"
              className="w-5 h-5 object-contain group-hover:drop-shadow-[0_0_8px_rgba(0,82,255,0.6)] transition-all"
            />
            <span className="underline decoration-primary/60 hover:decoration-primary" style={{ textDecorationColor: 'rgba(0,82,255,0.6)' }}>Base</span>
          </a>
          <span> blockchain.</span>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: feature.delay }}
              className="beast-card text-center hover:scale-105 transition-transform flex flex-col"
            >
              <pre
                className="text-xs md:text-sm mb-6 inline-block font-mono leading-tight"
                style={{ color: feature.color, textShadow: feature.glow }}
              >
                {feature.ascii}
              </pre>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--text-primary)', fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {feature.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)' }} className="text-base mb-6 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2 text-left flex-1">
                {feature.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex items-start gap-2 text-sm font-mono"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: feature.color }}
                    >
                      →
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
