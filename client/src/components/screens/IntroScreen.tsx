import { Button } from '@/components/ui/button';

/**
 * Intro Screen
 * 
 * Design: Ethereal Minimalism
 * - Minimal text, confident tone
 * - Soft purple glow accent
 * - Meditative pacing
 */

interface IntroScreenProps {
  onContinue: () => void;
}

export default function IntroScreen({ onContinue }: IntroScreenProps) {
  return (
    <div className="text-center space-y-12">
      {/* Decorative glow element */}
      <div className="flex justify-center mb-8">
        <div className="w-40 h-40 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-25 blur-3xl"></div>
      </div>

      {/* Main text */}
      <div className="space-y-6">
        <p className="text-2xl md:text-3xl text-gray-700 font-light leading-relaxed">
          Don't think too much.
          <br />
          <span className="text-gray-900 font-medium">Just be honest.</span>
        </p>
      </div>

      {/* Button */}
      <div className="pt-8">
        <Button
          onClick={onContinue}
          className="px-12 py-6 text-lg font-medium bg-gradient-to-r from-purple-300 to-pink-300 text-gray-900 hover:shadow-lg hover:shadow-purple-200/50 transition-all duration-300 rounded-full"
        >
          Continue
        </Button>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-pink-300 rounded-full opacity-30 animate-soft-scale"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-purple-300 rounded-full opacity-20 animate-soft-scale" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
}
