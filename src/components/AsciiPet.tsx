import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import { getAnimations, emotionColors, type Animal, type PetState } from '../lib/ascii';

interface AsciiPetProps {
  animal: Animal;
  state: PetState;
  className?: string;
}

export function AsciiPet({ animal, state, className }: AsciiPetProps) {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const animations = getAnimations(animal);
  const animation = animations[state] || animations.idle; // Fallback to idle if state not available
  // Ensure frame index is within bounds (fixes crash when animation changes)
  const safeFrameIndex = Math.min(currentFrameIndex, animation.frames.length - 1);
  const currentFrame = animation.frames[safeFrameIndex];
  const colors = emotionColors[state] || emotionColors.idle;

  useEffect(() => {
    if (!currentFrame || animation.frames.length === 1) return; // No animation needed

    const interval = setInterval(() => {
      setCurrentFrameIndex((prev) => {
        if (!animation.loop && prev === animation.frames.length - 1) {
          return prev; // Stop at last frame
        }
        return (prev + 1) % animation.frames.length;
      });
    }, currentFrame.duration || 500);

    return () => clearInterval(interval);
  }, [animation, currentFrame, state]);

  // Reset frame index when state changes
  useEffect(() => {
    setCurrentFrameIndex(0);
  }, [state]);

  // Safety check for undefined frame
  if (!currentFrame) {
    return <div className="h-24 flex items-center justify-center" />;
  }

  return (
    <div className="h-24 flex items-center justify-center overflow-hidden">
      <pre
        className={cn(
          'font-mono text-center leading-tight select-none transition-all duration-300',
          colors.primary,
          colors.glow,
          className
        )}
        style={{ fontSize: '0.85rem', lineHeight: '1.1' }}
      >
        {currentFrame.lines.map((line, i) => (
          <div key={i} className={cn('whitespace-pre', currentFrame.colors[i])}>
            {line}
          </div>
        ))}
      </pre>
    </div>
  );
}
