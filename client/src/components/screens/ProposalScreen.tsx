import { useState } from 'react';
import { Button } from '@/components/ui/button';

/**
 * Proposal Screen — Ethereal Minimalism
 * Keep the proposal moment warm and spacious. The alternate action gets an
 * indefinite hover/tap tease, while keyboard users keep a stable accessible path.
 */

interface ProposalScreenProps {
  onYes: () => void;
  onThinking: () => void;
}

export default function ProposalScreen({ onYes, onThinking }: ProposalScreenProps) {
  const [teaseCount, setTeaseCount] = useState(0);
  const [thinkingOffset, setThinkingOffset] = useState({ x: 0, y: 0 });

  const teaseThinkingButton = () => {
    // Keep the button close enough to remain visible on both mobile and desktop.
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 390;
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 844;
    const maxX = Math.min(112, Math.max(34, Math.round(viewportWidth * 0.22)));
    const maxY = Math.min(58, Math.max(22, Math.round(viewportHeight * 0.055)));
    const x = Math.round((Math.random() * 2 - 1) * maxX);
    const y = Math.round((Math.random() * 2 - 1) * maxY);

    setThinkingOffset({ x, y });
    setTeaseCount((count) => count + 1);
  };

  return (
    <section className="relative text-center">
      {/* Ambient proposal glow — soft enough to leave the words in charge. */}
      <div className="mb-12 flex justify-center">
        <div className="h-64 w-64 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 opacity-20 blur-3xl animate-glow-pulse" />
      </div>

      <div className="space-y-8">
        <p className="font-serif text-3xl font-normal tracking-[-0.02em] text-[#7a6b7e] md:text-4xl">
          So here it is<span className="text-[#d69acb]">…</span>
        </p>

        <div className="space-y-7 py-8">
          <p className="font-serif text-6xl font-medium leading-[0.95] tracking-[-0.05em] text-[#28212a] md:text-7xl">
            I like you.
          </p>

          <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-[#e4b7dc] to-transparent" />

          <p className="font-sans text-xl font-light leading-9 tracking-[0.01em] text-[#665b69] md:text-2xl">
            And I promise
            <br />
            I'll always treat you
            <br />
            the way you truly deserve.
          </p>
        </div>

        <p className="font-serif text-3xl font-medium tracking-[-0.02em] text-[#382d3b] md:text-4xl">
          Will you be mine<span className="text-[#d69acb]">?</span>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 pt-12 sm:flex-row">
        <Button
          onClick={onYes}
          aria-label="Say yes"
          className="h-auto min-w-36 rounded-full border border-white/80 bg-gradient-to-r from-[#f3afd5] via-[#efb8dd] to-[#cdb5ee] px-9 py-4 font-sans text-base font-semibold text-[#35273a] shadow-[0_12px_32px_rgba(224,155,207,0.28)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(214,148,203,0.38)] focus-visible:ring-2 focus-visible:ring-[#c7a1d7] focus-visible:ring-offset-4"
        >
          Yes 💖
        </Button>

        <div className="relative flex min-h-14 min-w-44 items-center justify-center">
          <Button
            // Desktop hover and every pointer click/tap both trigger a new location.
            onClick={(event) => {
              event.preventDefault();
              teaseThinkingButton();
            }}
            onPointerEnter={(event) => {
              if (event.pointerType === 'mouse') teaseThinkingButton();
            }}
            // Keyboard users still get a normal, reliable alternate action.
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onThinking();
              }
            }}
            aria-label="Stay thinking"
            className="h-auto min-w-44 rounded-full border border-[#ded1df] bg-white/65 px-7 py-4 font-sans text-base font-medium text-[#685b6c] shadow-[0_8px_24px_rgba(85,65,88,0.06)] transition-transform duration-300 ease-out hover:bg-white hover:shadow-[0_12px_28px_rgba(85,65,88,0.1)] focus-visible:translate-x-0 focus-visible:translate-y-0 focus-visible:ring-2 focus-visible:ring-[#c7a1d7] focus-visible:ring-offset-4"
            style={{ transform: `translate(${thinkingOffset.x}px, ${thinkingOffset.y}px)` }}
          >
            Still thinking 😌
          </Button>
        </div>
      </div>

      <p className="mt-5 min-h-5 text-xs font-medium tracking-[0.14em] text-[#b19bb3]" aria-live="polite">
        {teaseCount > 0 ? 'You almost had me.' : ''}
      </p>

      {/* Sparse floating hearts keep the ending soft, not noisy. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="absolute animate-float-up font-serif text-[#e2afd8] opacity-30"
            style={{
              left: `${20 + i * 20}%`,
              bottom: '-30px',
              animationDelay: `${i * 0.5}s`,
              fontSize: `${24 + i * 4}px`,
            }}
          >
            ♡
          </span>
        ))}
      </div>
    </section>
  );
}
