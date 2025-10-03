import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Server } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Globe, title: "Frontend", techs: ["HTML", "CSS", "JavaScript", "TypeScript", "React"] },
    { icon: Server, title: "Backend", techs: ["Node.js", "PHP", "Laravel", "Express"] },
    { icon: Database, title: "Database", techs: ["MySQL", "MongoDB", "PostgreSQL"] },
    { icon: Code2, title: "Tools", techs: ["Git", "Docker", "AWS", "Vercel"] }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With 7 years of experience in full-stack development, I specialize in creating scalable, 
            user-friendly applications using modern technologies. I'm passionate about clean code, 
            innovative solutions, and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className="p-6 bg-secondary/30 border-secondary/50 hover:bg-secondary/50 transition-smooth hover:shadow-glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-xl mb-4 group-hover:scale-110 transition-smooth">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-smooth">
                  {skill.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.techs.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-8 rounded-2xl bg-secondary/20 border border-secondary/30">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">7+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-secondary"></div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="w-px h-12 bg-secondary"></div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;