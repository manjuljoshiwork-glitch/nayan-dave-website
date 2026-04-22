import heroImg from "@/assets/hero.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-warm pt-28 md:pt-32">
      <div className="container-prose grid items-stretch gap-12 pb-20 md:grid-cols-2 md:gap-16 md:pb-28">
        <div className="flex flex-col justify-center animate-fade-up">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Author · Storyteller · Scientist
          </span>
          <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-foreground md:text-5xl lg:text-[3.5rem]">
            Where <em className="not-italic text-primary">Science</em> Meets Storytelling
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A scientist by profession, a storyteller by passion — bringing ideas to life
            through powerful narratives ready for screen and creative collaboration.
          </p>
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

        <div className="relative animate-fade-in flex">
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
