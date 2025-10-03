import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    
    reset();
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      value: "+2349016689243",
      href: "tel:+2349016689243",
      description: "Call me directly"
    },
    {
      icon: Mail,
      title: "Email",
      value: "hephzibaholaolu3@gmail.com",
      href: "mailto:hephzibaholaolu3@gmail.com",
      description: "Send me an email"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "09016689243",
      href: "https://wa.me/2349016689243",
      description: "Chat on WhatsApp"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 gradient-accent opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Get In <span className="gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <Card
              key={method.title}
              className="p-6 bg-secondary/30 border-secondary/50 hover:bg-secondary/50 transition-smooth hover:shadow-glow group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-xl mb-4 group-hover:scale-110 transition-smooth">
                <method.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                {method.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
              <a
                href={method.href}
                target={method.title === "WhatsApp" ? "_blank" : undefined}
                rel={method.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                className="text-primary hover:text-accent transition-smooth font-medium"
              >
                {method.value}
              </a>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto mt-12 p-8 bg-secondary/30 border-secondary/50">
          <h3 className="text-2xl font-bold mb-6 text-center">Send Me a Message</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                {...register("name")}
                className="mt-2"
              />
              {errors.name && (
                <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
              )}
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                {...register("email")}
                className="mt-2"
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
              )}
            </div>
            
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                {...register("message")}
                className="mt-2 min-h-[150px]"
              />
              {errors.message && (
                <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
              )}
            </div>
            
            <Button 
              type="submit" 
              variant="premium" 
              size="lg" 
              className="w-full group"
              disabled={isSubmitting}
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Card>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Available for freelance projects
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;