import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ecommerceImg from "@/assets/ecommerce-project.png";
import taskManagementImg from "@/assets/taskmanagement-project.png";
import restaurantImg from "@/assets/restaurant-project.png";
import portfolioImg from "@/assets/portfolio-project.png";
import publishingImg from "@/assets/publishing-project.png";

const Works = () => {
  // Sample projects - you can replace these with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard",
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
      image: ecommerceImg,
      liveLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "React-based task management application with real-time updates",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      image: taskManagementImg,
      liveLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      id: 3,
      title: "Restaurant Website",
      description: "Modern restaurant website with online reservation system",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      image: restaurantImg,
      liveLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Dashboard",
      description: "Analytics dashboard for tracking portfolio performance",
      technologies: ["React", "TypeScript", "Laravel", "Chart.js"],
      image: portfolioImg,
      liveLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      id: 5,
      title: "Publishing Company Website",
      description: "Educational publishing platform for schools and institutions",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      image: publishingImg,
      liveLink: "#",
      githubLink: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                My <span className="gradient-primary bg-clip-text text-transparent">Works</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A showcase of my projects built with modern web technologies. 
                Each project demonstrates my expertise in full-stack development.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-elevated transition-smooth border-primary/20">
                  <CardHeader>
                    <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex gap-3">
                    <Button variant="premium" size="sm" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Other Projects</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-glow transition-smooth">
                  <CardHeader>
                    <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex gap-2">
                    <Button variant="ghost" size="sm" asChild className="flex-1">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3" />
                        Live
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild className="flex-1">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6">
          <div className="container mx-auto text-center">
            <div className="bg-card border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new opportunities and exciting projects.
              </p>
              <Button variant="premium" size="lg" asChild>
                <Link to="/#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Works;
