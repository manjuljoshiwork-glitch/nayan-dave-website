import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

// ── EmailJS config ──────────────────────────────────────────────────────────
// 1. Sign up at https://www.emailjs.com  (free – 200 emails/month)
// 2. Add a Gmail service → copy its Service ID below
// 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{message}}
//    Set the "To Email" in the template to jayaba555@gmail.com
//    Copy the Template ID below
// 4. Go to Account → API Keys → copy your Public Key below
const EMAILJS_SERVICE_ID  = "service_5n4of2c";
const EMAILJS_TEMPLATE_ID = "template_szlyw8f";
const EMAILJS_PUBLIC_KEY  = "rqkzcssKqGQRDbUCY";
// ────────────────────────────────────────────────────────────────────────────

export const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  data.get("name") as string,
          from_email: data.get("email") as string,
          message:    data.get("message") as string,
        },
        EMAILJS_PUBLIC_KEY
      );

      form.reset();
      toast({
        title: "Message sent!",
        description: "Thank you — I’ll be in touch shortly.",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast({
        title: "Something went wrong",
        description: "Please try again or email davenayan270@gmail.com directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-surface-warm/60 py-14 md:py-24">
      <div className="container-prose grid gap-12 md:grid-cols-2 md:gap-20 md:items-center">
        {/* Left — soft scenic card inspired by reference */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-secondary via-background to-primary-soft/40 p-8 md:p-12 min-h-[520px] shadow-soft border border-border/60">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative">
            <span className="text-xs uppercase tracking-[0.22em] text-primary">Let’s Collaborate</span>
            <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-foreground md:text-5xl">
              Built for stories
              <br /> worth telling.
            </h2>
          </div>

          {/* Step card — frosted glass */}
          <div className="relative mt-10 rounded-2xl border border-border/60 bg-background/70 p-6 backdrop-blur-md shadow-soft md:mt-14 md:p-8">
            <div className="flex gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground">
                1
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Fill out the form</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Share a few details about your project or idea.
                </p>
              </div>
            </div>
            <div className="mt-5 flex gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground">
                2
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Let’s have a conversation</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  I personally read every message and reply soon.
                </p>
              </div>
            </div>
          </div>

          {/* Contact details with icons */}
          <div className="relative mt-8 space-y-3 text-sm">
            <a
              href="mailto:davenayan270@gmail.com"
              className="flex items-center gap-3 text-muted-foreground transition-smooth hover:text-primary"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background shadow-soft">
                <Mail className="h-4 w-4 text-primary" />
              </span>
              <span>
                <span className="block text-[10px] uppercase tracking-[0.18em] text-foreground/70">Email</span>
                davenayan270@gmail.com
              </span>
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background shadow-soft">
                <MapPin className="h-4 w-4 text-primary" />
              </span>
              <span>
                <span className="block text-[10px] uppercase tracking-[0.18em] text-foreground/70">Based in</span>
                Available worldwide
              </span>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-background p-8 shadow-soft md:p-10"
        >
          <h3 className="font-serif text-2xl text-foreground md:text-3xl">Get in touch</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Tell me a little about what you have in mind.
          </p>
          <div className="mt-6 space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="you@studio.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Tell me a little about what you have in mind…"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-smooth hover:bg-primary-deep disabled:opacity-70"
            >
              {submitting ? "Sending…" : "Send Message"} <span aria-hidden>→</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
