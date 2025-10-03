import { Button } from "@/components/ui/button";
import { ChevronDown, Code } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 lg:py-24 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 gradient-secondary opacity-30"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-10 left-10 w-48 h-48 gradient-accent rounded-full blur-3xl animate-float opacity-60"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 gradient-accent rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-3 py-1.5 mb-4">
              <Code className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">Full Stack Developer</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="gradient-primary bg-clip-text text-transparent animate-glow">
                Zoe Dev
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-6 leading-relaxed">
              Crafting digital experiences with{" "}
              <span className="text-primary font-semibold">7 years</span> of expertise in modern web technologies
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
              <Button variant="premium" size="lg" className="group" asChild>
                <Link to="/works">
                  <Code className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  View My Work
                </Link>
              </Button>
              <Button variant="contact" size="lg">
                Get In Touch
              </Button>
            </div>
            
            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {["TypeScript", "Node.js", "PHP", "Laravel", "React"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-secondary/50 border border-secondary rounded-full text-xs font-medium transition-smooth hover:bg-secondary/80 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-20 scale-110 animate-glow"></div>
              <img
                src="/lovable-uploads/9a9e45fe-626c-49de-bd61-6e5e3908daa3.png"
                alt="Zoe Dev - Full Stack Developer"
                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-elevated border-4 border-primary/20 transition-smooth hover:border-primary/40 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;