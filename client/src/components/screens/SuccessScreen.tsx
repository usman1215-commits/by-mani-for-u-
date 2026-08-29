import { useEffect, useState } from 'react';

/**
 * Success Screen
 * 
 * Design: Ethereal Minimalism
 * - Celebration moment
 * - Soft confetti animation (not chaotic)
 * - Warm, confident, playful tone
 * - Floating hearts and particles
 */

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

export default function SuccessScreen() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate confetti particles
    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -20,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="text-center space-y-12 relative">
      {/* Large celebratory glow */}
      <div className="flex justify-center mb-12">
        <div className="w-72 h-72 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-25 blur-3xl animate-glow-pulse"></div>
      </div>

      {/* Success message */}
      <div className="space-y-6 animate-fade-in-up">
        <p className="text-5xl md:text-6xl text-gray-900 font-bold leading-tight">
          You chose well 😏💖
        </p>
        <p className="text-2xl md:text-3xl text-gray-600 font-light">
          I'm really glad it's you.
        </p>
      </div>

      {/* Confetti particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute animate-confetti"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          >
            {particle.id % 3 === 0 ? (
              <span className="text-2xl">♡</span>
            ) : particle.id % 3 === 1 ? (
              <span className="text-xl text-pink-300">●</span>
            ) : (
              <span className="text-lg text-purple-300">✨</span>
            )}
          </div>
        ))}

        {/* Floating hearts background */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`heart-${i}`}
            className="absolute text-pink-300 opacity-30 animate-float-up"
            style={{
              left: `${10 + i * 12}%`,
              bottom: '-50px',
              animationDelay: `${i * 0.3}s`,
              fontSize: `${20 + i * 3}px`,
            }}
          >
            ♡
          </div>
        ))}
      </div>

      {/* Celebration glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-pink-200 rounded-full opacity-10 blur-3xl animate-soft-scale"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-200 rounded-full opacity-10 blur-3xl animate-soft-scale" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
}
