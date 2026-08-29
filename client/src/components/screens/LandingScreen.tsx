import { Button } from '@/components/ui/button';

/**
 * Landing Screen — Ethereal Minimalism
 * Premium serif display type, quiet editorial spacing, soft rose-violet light,
 * and a single confident invitation. Keep the composition airy rather than busy.
 */

interface LandingScreenProps {
  onStart: () => void;
}

export default function LandingScreen({ onStart }: LandingScreenProps) {
  return (
    <section className="relative flex min-h-[min(720px,calc(100vh-2rem))] items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/55 px-6 py-14 shadow-[0_24px_80px_rgba(190,135,188,0.12)] backdrop-blur-[2px] sm:px-10 md:min-h-[680px] md:px-16">
      {/* Premium ambient light: intentionally soft and asymmetrical. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#f4cce7]/55 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#ddd0f7]/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 blur-2xl"
      />

      <div className="relative z-10 flex max-w-xl flex-col items-center text-center">
        <div className="mb-9 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#a378a4]">
          <span className="h-px w-8 bg-[#e9c9e7]" />
          <span>A little note</span>
          <span className="h-px w-8 bg-[#e9c9e7]" />
        </div>

        <div className="space-y-6">
          <h1 className="font-serif text-6xl font-medium leading-[0.94] tracking-[-0.045em] text-[#28212a] sm:text-7xl md:text-[6.8rem]">
            Hey<span className="text-[#d69acb]">…</span>
          </h1>

          <p className="mx-auto max-w-md font-sans text-lg font-light leading-8 tracking-[0.01em] text-[#655b69] sm:text-xl md:text-[1.35rem] md:leading-9">
            this is something small.
            <br />
            <span className="font-medium text-[#3f3542]">Just follow along</span>{' '}
            <span className="inline-block animate-soft-scale" aria-label="smiling face">😌</span>
          </p>
        </div>

        <div className="mt-12">
          <Button
            onClick={onStart}
            aria-label="Start the proposal experience"
            className="group h-auto rounded-full border border-white/80 bg-gradient-to-r from-[#f3afd5] via-[#efb8dd] to-[#cdb5ee] px-11 py-4 font-sans text-base font-semibold tracking-[0.02em] text-[#35273a] shadow-[0_12px_32px_rgba(224,155,207,0.28)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(214,148,203,0.38)] focus-visible:ring-2 focus-visible:ring-[#c7a1d7] focus-visible:ring-offset-4 focus-visible:ring-offset-white"
          >
            <span className="transition-transform duration-500 group-hover:translate-x-0.5">Start</span>
            <span aria-hidden="true" className="ml-2 opacity-65 transition-transform duration-500 group-hover:translate-x-1">↗</span>
          </Button>
        </div>

        <p className="mt-8 text-xs font-medium tracking-[0.18em] text-[#b29bb4]">no pressure · just a little curiosity</p>
      </div>

      {/* Floating hearts: sparse and deliberately low contrast. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="absolute animate-float-up font-serif text-[#e2afd8] opacity-45"
            style={{
              left: `${18 + i * 22}%`,
              bottom: '-26px',
              animationDelay: `${i * 0.65}s`,
              fontSize: `${18 + i * 5}px`,
            }}
          >
            ♡
          </span>
        ))}
      </div>
    </section>
  );
}
