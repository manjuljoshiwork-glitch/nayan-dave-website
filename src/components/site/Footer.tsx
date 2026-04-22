export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container-prose flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-serif text-sm text-foreground">
          <span className="text-primary">·</span> Nayan
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Nayan · All rights reserved · Crafted with care, for stories worth sharing.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
