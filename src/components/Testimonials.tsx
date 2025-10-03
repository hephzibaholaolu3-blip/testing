import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Chukwudi Okafor",
      role: "CEO, TechVista Solutions",
      content: "Zoe delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and technical expertise was outstanding.",
      avatar: "CO"
    },
    {
      name: "Amina Bello",
      role: "Founder, EduConnect Nigeria",
      content: "Working with Zoe was a pleasure. The publishing platform was delivered on time and has significantly improved our workflow. Highly recommended!",
      avatar: "AB"
    },
    {
      name: "Tunde Adeyemi",
      role: "Restaurant Owner",
      content: "The website and reservation system has transformed how we manage our restaurant. Our customers love the seamless booking experience.",
      avatar: "TA"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 gradient-secondary opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Client <span className="gradient-primary bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don't just take my word for it - hear what my clients have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="group hover:shadow-glow transition-smooth bg-card/50 border-secondary/50 hover:bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Quote className="w-8 h-8 text-primary/30 mb-3" />
                <p className="text-muted-foreground leading-relaxed">
                  {testimonial.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
