import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Award, BarChart3, Globe } from 'lucide-react';

const EnterpriseFeatures = () => {
  const [activeTab, setActiveTab] = useState("services");
  
  const clients = [
    { name: "TechCorp Inc.", logo: "TC" },
    { name: "Global Systems", logo: "GS" },
    { name: "Innovate Solutions", logo: "IS" },
    { name: "Enterprise Tech", logo: "ET" }
  ];
  
  const testimonials = [
    { 
      text: "Working with Zoe was a game-changer for our digital transformation.", 
      author: "Sarah Johnson", 
      position: "CTO, TechCorp Inc." 
    },
    { 
      text: "Exceptional attention to detail and enterprise-grade solutions.", 
      author: "Michael Chen", 
      position: "Director of Engineering, Global Systems" 
    }
  ];
  
  return (
    <section className="py-20 relative overflow-hidden" id="enterprise">
      <div className="absolute inset-0 gradient-secondary opacity-30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Enterprise Solutions
          </Badge>
          <h2 className="text-3xl font-bold mb-4">
            Professional Services for <span className="gradient-primary bg-clip-text text-transparent">Enterprise Clients</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering scalable, secure, and high-performance solutions for businesses of all sizes.
          </p>
        </div>
        
        <Tabs defaultValue="services" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="clients">Clients</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          </TabsList>
          
          <TabsContent value="services" className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-smooth">
                <CardHeader>
                  <Building2 className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Enterprise Architecture</CardTitle>
                  <CardDescription>Scalable solutions for complex business needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Badge variant="outline" className="h-1.5 w-1.5 rounded-full p-0" />
                      Microservices Architecture
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline" className="h-1.5 w-1.5 rounded-full p-0" />
                      Cloud Infrastructure
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline" className="h-1.5 w-1.5 rounded-full p-0" />
                      API Development
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-smooth">
                <CardHeader>
                  <Globe className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Web Applications</CardTitle>
                  <CardDescription>Modern web solutions for enterprise needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Badge variant="outline" className="h-1.5 w-1.5 rounded-full p-0" />
                      React & Next.js Applications
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline" className="h-1.5 w-1.5 rounded-full p-0" />
                      Progressive Web Apps
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline" className="h-1.5 w-1.5 rounded-full p-0" />
                      Enterprise Dashboards
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-smooth">
                <CardHeader>
                  <BarChart3 className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Data Analytics</CardTitle>
                  <CardDescription>Transform data into business insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Badge variant="outline" className="h-1.5 w-1.5 rounded-full p-0" />
                      Business Intelligence
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline" className="h-1.5 w-1.5 rounded-full p-0" />
                      Data Visualization
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline" className="h-1.5 w-1.5 rounded-full p-0" />
                      Custom Reporting
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="clients">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clients.map((client, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-smooth">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4 border-2 border-primary/20">
                      <span className="text-xl font-bold text-primary">{client.logo}</span>
                    </div>
                    <h3 className="font-medium">{client.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="testimonials">
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-smooth">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Award className="w-8 h-8 text-primary mb-2" />
                    </div>
                    <p className="italic mb-4">"{testimonial.text}"</p>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 text-center">
          <Button variant="premium" size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseFeatures;