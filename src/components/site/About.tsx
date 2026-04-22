import aboutImg from "@/assets/about.jpg";

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-prose grid items-center gap-12 md:grid-cols-2 md:gap-20">
        <div className="order-2 md:order-1">
          <div className="overflow-hidden rounded-[1.5rem] border border-border bg-muted shadow-soft">
            <img
              src={aboutImg}
              alt="Portrait of the author at his writing desk"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <span className="text-xs uppercase tracking-[0.22em] text-primary">My Journey</span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            From the lab bench to the written page.
          </h2>
          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              For decades, my world was defined by precision — pipettes, microscopes, and the
              quiet patience of discovery. Science taught me to look closely, to ask why, and
              to find wonder in the smallest details.
            </p>
            <p>
              Storytelling chose me later in life. What began as notes between experiments
              grew into characters, then chapters, and finally books — narratives shaped by a
              lifetime of curiosity and human observation.
            </p>
            <p>
              Today, I write with one hope: that these stories find their way beyond the page —
              onto screens, into voices, and into the hands of creators who can bring them to
              life in new and lasting ways.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
