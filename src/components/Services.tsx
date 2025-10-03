import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Palette, Server, Smartphone, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building complete web applications with modern technologies and best practices"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Designing and optimizing database schemas for scalability and performance"
    },
    {
      icon: Palette,
      title: "UI/UX Implementation",
      description: "Creating beautiful, responsive interfaces that users love to interact with"
    },
    {
      icon: Server,
      title: "API Integration",
      description: "Seamlessly connecting frontend applications with backend services and third-party APIs"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Ensuring your application looks perfect on all devices and screen sizes"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Making your applications faster and more efficient for better user experience"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 gradient-accent opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            What I <span className="gradient-primary bg-clip-text text-transparent">Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I offer comprehensive web development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-glow transition-smooth bg-secondary/30 border-secondary/50 hover:bg-secondary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
