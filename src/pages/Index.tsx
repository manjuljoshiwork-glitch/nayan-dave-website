import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Books from "@/components/site/Books";
import CollaborateBanner from "@/components/site/CollaborateBanner";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Books />
      <CollaborateBanner />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
