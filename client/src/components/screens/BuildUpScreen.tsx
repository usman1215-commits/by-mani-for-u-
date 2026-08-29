import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

/**
 * Build Up Screen
 * 
 * Design: Ethereal Minimalism
 * - Meditative pacing with timed reveal
 * - Two-part message with pause
 * - Soft glow effects
 * - Builds emotional momentum
 */

interface BuildUpScreenProps {
  onContinue: () => void;
}

export default function BuildUpScreen({ onContinue }: BuildUpScreenProps) {
  const [showSecondPart, setShowSecondPart] = useState(false);

  useEffect(() => {
    // Show second part after 2.5 seconds
    const timer = setTimeout(() => {
      setShowSecondPart(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center space-y-12">
      {/* Decorative glow element */}
      <div className="flex justify-center mb-8">
        <div className="w-48 h-48 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-25 blur-3xl"></div>
      </div>

      {/* First part - always visible */}
      <div className="space-y-6 animate-fade-in-up">
        <p className="text-2xl md:text-3xl text-gray-700 font-light leading-relaxed">
          This wasn't about right or wrong answers.
          <br />
          <span className="text-gray-900 font-medium">Just about you staying till the end.</span>
        </p>
      </div>

      {/* Second part - revealed after pause */}
      {showSecondPart && (
        <div className="space-y-8 animate-fade-in-up">
          <div className="h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent"></div>
          
          <p className="text-2xl md:text-3xl text-gray-900 font-light leading-relaxed">
            Because I wanted to say this properly.
          </p>

          <div className="pt-8">
            <Button
              onClick={onContinue}
              className="px-12 py-6 text-lg font-medium bg-gradient-to-r from-pink-300 to-purple-300 text-gray-900 hover:shadow-lg hover:shadow-pink-200/50 transition-all duration-300 rounded-full"
            >
              Continue
            </Button>
          </div>
        </div>
      )}

      {/* Subtle floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-pink-300 rounded-full opacity-30 animate-soft-scale"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-300 rounded-full opacity-20 animate-soft-scale" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
}
