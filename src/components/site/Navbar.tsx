import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#books", label: "Books" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-smooth",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="container-prose flex h-16 items-center justify-between">
        <a href="#home" className="font-serif text-lg font-semibold tracking-tight text-foreground">
          <span className="text-primary">·</span> Nayan
        </a>
        <ul className="hidden items-center gap-8 md:flex h-full">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href} className="h-full">
                <a
                  href={l.href}
                  onClick={() => setActive(l.href)}
                  className={cn(
                    "relative flex h-full items-center text-sm transition-smooth hover:text-primary",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {l.label}
                  <span
                    className={cn(
                      "absolute inset-x-0 bottom-0 h-[2px] origin-center rounded-full bg-primary transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-smooth hover:bg-primary-deep md:inline-flex"
        >
          Let’s Collaborate
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
