import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import EnterpriseFeatures from "@/components/EnterpriseFeatures";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <About />
        <Services />
        <Testimonials />
        <EnterpriseFeatures />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
