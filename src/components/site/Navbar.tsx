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
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-smooth",
          scrolled || menuOpen
            ? "border-b border-border/60 bg-background/95 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <nav className="container-prose flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="font-serif text-lg font-semibold tracking-tight text-foreground">
            <span className="text-primary">·</span> Nayan
          </a>

          {/* Desktop nav */}
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

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-smooth hover:bg-primary-deep md:inline-flex"
          >
            Let's Collaborate
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex md:hidden flex-col items-center justify-center w-10 h-10 gap-[5px] rounded-full hover:bg-muted transition-smooth"
          >
            {menuOpen ? (
              // X icon
              <span className="relative w-5 h-5 flex items-center justify-center">
                <span className="absolute w-5 h-[2px] rounded-full bg-foreground rotate-45" />
                <span className="absolute w-5 h-[2px] rounded-full bg-foreground -rotate-45" />
              </span>
            ) : (
              // Hamburger icon
              <>
                <span className="w-5 h-[2px] rounded-full bg-foreground" />
                <span className="w-5 h-[2px] rounded-full bg-foreground" />
                <span className="w-5 h-[2px] rounded-full bg-foreground" />
              </>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={cn(
            "absolute inset-x-0 top-16 bg-background border-b border-border/60 shadow-elev transition-all duration-300",
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          )}
        >
          <div className="container-prose py-6 space-y-1">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => handleNavClick(l.href)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-4 py-3.5 text-[15px] font-medium transition-smooth",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  )}
                  {l.label}
                </a>
              );
            })}

            {/* CTA */}
            <div className="pt-4 pb-2">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-smooth hover:bg-primary-deep"
              >
                Let's Collaborate
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
