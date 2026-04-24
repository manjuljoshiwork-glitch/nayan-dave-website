export const CollaborateBanner = () => {
  return (
    <section id="collaborate" className="py-14 md:py-20">
      <div className="container-prose">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-clay px-8 py-16 text-center text-primary-foreground shadow-elev md:px-16 md:py-24">
          {/* Ambient glows */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" />

          {/* Subtle film-strip motif (top) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-6 opacity-25"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, hsl(var(--primary-foreground) / 0.6) 0 6px, transparent 6px 22px)",
              maskImage:
                "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)",
            }}
          />
          {/* Subtle film-strip motif (bottom) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-6 opacity-25"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, hsl(var(--primary-foreground) / 0.6) 0 6px, transparent 6px 22px)",
              maskImage:
                "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)",
            }}
          />

          {/* Faint grid texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            }}
          />

          {/* Decorative corner marks */}
          <span aria-hidden className="pointer-events-none absolute left-6 top-6 h-6 w-6 border-l border-t border-primary-foreground/40 md:left-10 md:top-10" />
          <span aria-hidden className="pointer-events-none absolute right-6 top-6 h-6 w-6 border-r border-t border-primary-foreground/40 md:right-10 md:top-10" />
          <span aria-hidden className="pointer-events-none absolute bottom-6 left-6 h-6 w-6 border-b border-l border-primary-foreground/40 md:bottom-10 md:left-10" />
          <span aria-hidden className="pointer-events-none absolute bottom-6 right-6 h-6 w-6 border-b border-r border-primary-foreground/40 md:bottom-10 md:right-10" />

          {/* Eyebrow with rule lines */}
          <div className="relative flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-8 bg-primary-foreground/40" />
            <span className="text-xs uppercase tracking-[0.28em] text-primary-foreground/80">
              Collaboration
            </span>
            <span aria-hidden className="h-px w-8 bg-primary-foreground/40" />
          </div>

          <h2 className="relative mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
            Interested in bringing these stories to life?
          </h2>

          {/* Tiny ornamental divider */}
          <div aria-hidden className="relative mx-auto mt-6 flex items-center justify-center gap-2 text-primary-foreground/60">
            <span className="h-px w-10 bg-primary-foreground/40" />
            <span className="text-[10px] tracking-[0.4em]">✦</span>
            <span className="h-px w-10 bg-primary-foreground/40" />
          </div>

          <p className="relative mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
            I’m open to collaborating with production houses, agencies, and creative teams to
            adapt my work into films, series, or other formats.
          </p>

          <a
            href="#contact"
            className="group relative mt-10 inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-medium text-foreground shadow-soft transition-smooth hover:bg-secondary"
          >
            Let’s Connect
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollaborateBanner;
