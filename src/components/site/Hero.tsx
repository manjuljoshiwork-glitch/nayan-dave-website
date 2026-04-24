import heroImg from "@/assets/hero.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-warm pt-20 md:pt-32">
      <div className="container-prose grid items-stretch gap-8 pb-14 md:grid-cols-2 md:gap-16 md:pb-28">
        <div className="order-2 md:order-1 flex flex-col justify-center animate-fade-up">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Author · Storyteller · Scientist
          </span>
          <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-foreground md:text-5xl lg:text-[3.5rem]">
            Where <em className="not-italic text-primary">Science</em> Meets Storytelling
          </h1>
          <div className="mt-6 max-w-xl space-y-3">
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              A scientist by profession, a storyteller by passion — bringing brand new ideas to life through powerful narratives and dialogues.
            </p>
            <ul className="space-y-1.5 text-[14px] text-muted-foreground">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Every scene vividly imagined and carefully written</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Stories play in the mind like a movie — never dragging, never stagnant</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Always involving the reader's five senses</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Ready for screen, creative collaboration and reading entertainment</li>
            </ul>
            <p className="text-[14px] font-medium text-foreground/70">
              Let's collaborate and make a blockbuster movie out of it.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#books"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-smooth hover:bg-primary-deep hover:shadow-elev sm:w-auto"
            >
              Explore My Work
              <span aria-hidden>→</span>
            </a>
            <a
              href="#collaborate"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/30 bg-background/60 px-7 py-3.5 text-sm font-medium text-foreground transition-smooth hover:border-primary hover:text-primary sm:w-auto"
            >
              Let’s Collaborate
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 relative animate-fade-in flex">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-soft blur-2xl opacity-70" />
          <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-background shadow-elev w-full">
            <img
              src={heroImg}
              alt="An open book with film reel and molecular illustrations symbolizing science meeting storytelling"
              width={1536}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
