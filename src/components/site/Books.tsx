import book1 from "@/assets/book-1.jpg";
import book2 from "@/assets/book-2.jpg";
import book3 from "@/assets/book-3.jpg";

type Book = {
  title: string;
  tagline: string;
  description: string[];
  cover: string;
  alt: string;
  buyLink?: string;
  reverse?: boolean;
};

const books: Book[] = [
  {
    title: "Exotic Bomb",
    tagline: "A Novel · Science Thriller",
    description: [
      "From a writer with a deep science and medical-technology background comes a gripping work of fiction that educates, entertains, and keeps you in suspense.",
      "A thriller where imagined politics, invented characters, and a single dangerous idea collide in a story built to be lived in, not just read.",
    ],
    cover: book1,
    alt: "Cover of Exotic Bomb by Nayan Dave",
    buyLink: "https://www.amazon.in/EXOTIC-BOMB-NAYAN-DAVE-ebook/dp/B0BS1S3W72",
    reverse: false,
  },
  {
    title: "Evil Alliance and a Rogue Agent",
    tagline: "A Novel · Techno-Political Thriller",
    description: [
      "A top-secret NASA mission ends up in disaster, and the US satellites failures mystery remains in limbo. Collapse of GPS system spreads chaos in the world. Ships collide at mid sea; airplanes land at odd cities. Petroleum extractors end up in dry beds with no oil. A hidden alliance of Russia, China, Iran, and North Korea executes a master plan to bring the superpower to its knees.",
      "Framed for crimes he didn't commit, CIA agent Jason Smith sits on death row with one last chance to expose the truth — aided only by a mysterious priest who may be more than he appears. Doomsday scenario appears on the horizon, kill or get killed… Read the book for the final verdict.",
    ],
    cover: book2,
    alt: "Cover of Evil Alliance and a Rogue Agent by Nayan Dave",
    buyLink: "https://www.amazon.in/Evil-Alliance-Rogue-Agent-Nayan/dp/B0G2GN7JLH",
    reverse: true,
  },
  {
    title: "Darkness of My Eyes",
    tagline: "A Novel · Romantic Drama",
    description: [
      "A compassionate love story of a brave veteran reporter who loses her sight to war injuries and decides to end her life — until a military research doctor vows to restore what the battlefield took from her.",
      "Filled with twists, raw emotion, and quiet sacrifice, this romantic and reality-driven story captures the anguish of disability and the unseen cost of war — with an unsuspecting ending that will fill your heart with grace and tenderness.",
    ],
    cover: book3,
    alt: "Cover of Darkness of My Eyes by Nayan Dave",
    buyLink: "https://www.amazon.in/Darkness-My-Eyes-Nayan-Dave/dp/1480954233",
    reverse: false,
  },
];

const BookRow = ({ book }: { book: Book }) => (
  <article
    className={`grid items-center gap-12 md:grid-cols-2 md:gap-20 ${
      book.reverse ? "md:[&>*:first-child]:order-2" : ""
    }`}
  >
    <div className="relative">
      <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-soft opacity-70 blur-2xl" />
      <div className="aspect-[4/5] flex items-center justify-center">
        <img
          src={book.cover}
          alt={book.alt}
          loading="lazy"
          width={1024}
          height={1280}
          className="h-full w-full object-contain"
        />
      </div>
    </div>
    <div>
      <span className="text-[11px] uppercase tracking-[0.22em] text-primary">{book.tagline}</span>
      <h3 className="mt-3 font-serif text-[1.75rem] leading-tight text-foreground md:text-[2.25rem]">
        {book.title}
      </h3>
      <div className="mt-5 max-w-md space-y-3">
        {book.description.map((para, i) => (
          <p key={i} className="text-[15px] leading-relaxed text-muted-foreground">
            {para}
          </p>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={book.buyLink ?? "#contact"}
          target={book.buyLink ? "_blank" : undefined}
          rel={book.buyLink ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-smooth hover:bg-primary-deep"
        >
          Buy Now
        </a>
      </div>
    </div>
  </article>
);

export const Books = () => {
  return (
    <section id="books" className="bg-surface-warm/60 py-14 md:py-24">
      <div className="container-prose">
        <div className="mb-16 max-w-2xl md:mb-20 mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.22em] text-primary">The Books</span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Three stories, one invitation to imagine.
          </h2>
        </div>

        <div className="space-y-16 md:space-y-24">
          {books.map((b) => (
            <BookRow key={b.title} book={b} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
