import { Button } from '@/components/ui/button';

/**
 * First Question Screen
 * 
 * Design: Ethereal Minimalism
 * - Playful, slightly teasing tone
 * - Two button paths (Yes/No) - both respected
 * - Soft glow effects on buttons
 */

interface FirstQuestionScreenProps {
  onYes: () => void;
  onNo: () => void;
}

export default function FirstQuestionScreen({ onYes, onNo }: FirstQuestionScreenProps) {
  return (
    <div className="text-center space-y-12">
      {/* Decorative glow element */}
      <div className="flex justify-center mb-8">
        <div className="w-48 h-48 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Main question */}
      <div className="space-y-6">
        <p className="text-4xl md:text-5xl text-gray-900 font-bold leading-tight">
          I like you.
        </p>
        <p className="text-xl md:text-2xl text-gray-600 font-light">
          Do you like me?
        </p>
      </div>

      {/* Buttons - both paths respected */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
        <Button
          onClick={onYes}
          className="px-8 py-6 text-lg font-medium bg-gradient-to-r from-pink-300 to-pink-400 text-gray-900 hover:shadow-lg hover:shadow-pink-200/50 transition-all duration-300 rounded-full"
        >
          Yes 💖
        </Button>
        <Button
          onClick={onNo}
          variant="outline"
          className="px-8 py-6 text-lg font-medium border-2 border-gray-300 text-gray-900 hover:bg-gray-50 hover:shadow-lg transition-all duration-300 rounded-full"
        >
          No 😶
        </Button>
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 opacity-30 animate-float-up"
            style={{
              left: `${15 + i * 15}%`,
              bottom: '-30px',
              animationDelay: `${i * 0.4}s`,
              fontSize: `${16 + i * 4}px`,
            }}
          >
            ♡
          </div>
        ))}
      </div>
    </div>
  );
}
