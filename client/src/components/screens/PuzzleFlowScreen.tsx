import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

/**
 * Puzzle Flow Screen
 * 
 * Design: Ethereal Minimalism
 * - Different text for Yes vs No paths (but both respected)
 * - Interactive puzzle (tap 3 floating hearts)
 * - Smooth transitions between puzzle steps
 * - Playful, slightly mysterious tone
 */

interface PuzzleFlowScreenProps {
  userPath: 'yes' | 'no' | null;
  onComplete: () => void;
}

type PuzzleStep = 'confirmation' | 'retry' | 'puzzle' | 'complete';

export default function PuzzleFlowScreen({ userPath, onComplete }: PuzzleFlowScreenProps) {
  const [puzzleStep, setPuzzleStep] = useState<PuzzleStep>('confirmation');
  const [heartsClicked, setHeartsClicked] = useState(0);
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  // Generate random floating hearts for puzzle
  useEffect(() => {
    if (puzzleStep === 'puzzle' && hearts.length === 0) {
      const newHearts = [...Array(3)].map((_, i) => ({
        id: i,
        x: Math.random() * 60 + 20,
        y: Math.random() * 40 + 20,
      }));
      setHearts(newHearts);
    }
  }, [puzzleStep, hearts.length]);

  const handleConfirmation = (confirm: boolean) => {
    if (confirm) {
      setPuzzleStep('puzzle');
    } else {
      setPuzzleStep('retry');
    }
  };

  const handleHeartClick = (id: number) => {
    const newCount = heartsClicked + 1;
    setHeartsClicked(newCount);

    if (newCount === 3) {
      setTimeout(() => {
        setPuzzleStep('complete');
      }, 300);
    }
  };

  const handleRetry = () => {
    setPuzzleStep('confirmation');
  };

  const handleContinue = () => {
    onComplete();
  };

  return (
    <div className="text-center space-y-12">
      {/* Decorative glow */}
      <div className="flex justify-center mb-8">
        <div className="w-40 h-40 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-25 blur-3xl"></div>
      </div>

      {puzzleStep === 'confirmation' && (
        <>
          {/* Confirmation text based on path */}
          <div className="space-y-6">
            <p className="text-3xl md:text-4xl text-gray-900 font-bold leading-tight">
              {userPath === 'yes' ? 'That was quick…' : 'Hmm…'}
            </p>
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              {userPath === 'yes' ? 'are you sure? 😏' : 'are you sure?'}
            </p>
          </div>

          {/* Confirmation buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              onClick={() => handleConfirmation(true)}
              className="px-8 py-6 text-lg font-medium bg-gradient-to-r from-pink-300 to-pink-400 text-gray-900 hover:shadow-lg hover:shadow-pink-200/50 transition-all duration-300 rounded-full"
            >
              Yes
            </Button>
            <Button
              onClick={() => handleConfirmation(false)}
              variant="outline"
              className="px-8 py-6 text-lg font-medium border-2 border-gray-300 text-gray-900 hover:bg-gray-50 transition-all duration-300 rounded-full"
            >
              {userPath === 'yes' ? 'Wait' : 'Maybe'}
            </Button>
          </div>
        </>
      )}

      {puzzleStep === 'retry' && (
        <>
          {/* Retry screen */}
          <div className="space-y-6">
            <p className="text-3xl md:text-4xl text-gray-900 font-bold leading-tight">
              Let's try that again…
            </p>
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              Sometimes first answers aren't final.
            </p>
          </div>

          <div className="pt-8">
            <Button
              onClick={handleRetry}
              className="px-12 py-6 text-lg font-medium bg-gradient-to-r from-purple-300 to-pink-300 text-gray-900 hover:shadow-lg hover:shadow-purple-200/50 transition-all duration-300 rounded-full"
            >
              Continue
            </Button>
          </div>
        </>
      )}

      {puzzleStep === 'puzzle' && (
        <>
          {/* Interactive puzzle - tap 3 hearts */}
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl text-gray-900 font-light">
              Tap the hearts
              <br />
              <span className="text-gray-600">({heartsClicked}/3)</span>
            </p>
          </div>

          {/* Floating hearts to tap */}
          <div className="relative w-full h-80 bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl overflow-hidden border border-pink-100">
            {hearts.map((heart) => (
              <button
                key={heart.id}
                onClick={() => handleHeartClick(heart.id)}
                className="absolute w-16 h-16 flex items-center justify-center text-4xl cursor-pointer transform transition-all duration-200 hover:scale-125"
                style={{
                  left: `${heart.x}%`,
                  top: `${heart.y}%`,
                  opacity: heartsClicked > heart.id ? 0.3 : 1,
                }}
              >
                <span className="animate-soft-scale">♡</span>
              </button>
            ))}
          </div>
        </>
      )}

      {puzzleStep === 'complete' && (
        <>
          {/* Puzzle complete */}
          <div className="space-y-6">
            <p className="text-3xl md:text-4xl text-gray-900 font-bold leading-tight">
              See… you made it this far.
            </p>
          </div>

          <div className="pt-8">
            <Button
              onClick={handleContinue}
              className="px-12 py-6 text-lg font-medium bg-gradient-to-r from-pink-300 to-purple-300 text-gray-900 hover:shadow-lg hover:shadow-pink-200/50 transition-all duration-300 rounded-full"
            >
              Next
            </Button>
          </div>

          {/* Floating hearts celebration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute text-pink-300 opacity-40 animate-float-up"
                style={{
                  left: `${10 + i * 15}%`,
                  bottom: '-30px',
                  animationDelay: `${i * 0.2}s`,
                  fontSize: `${20 + i * 4}px`,
                }}
              >
                ♡
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
