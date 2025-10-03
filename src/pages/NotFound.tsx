import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 gradient-accent opacity-10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 gradient-primary opacity-20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 gradient-primary opacity-20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="text-center relative z-10 px-6">
        <h1 className="text-9xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="premium" size="lg" className="group">
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Go Home
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => window.history.back()}
            className="group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
