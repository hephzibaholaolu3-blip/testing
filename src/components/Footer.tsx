import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/zoe-dev",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:hephzibaholaolu3@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+2349016689243",
      label: "Phone"
    }
  ];

  return (
    <footer className="py-8 border-t border-secondary/50 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-6 mb-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "LinkedIn" ? "_blank" : undefined}
                rel={link.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                className="w-10 h-10 rounded-full bg-secondary/50 hover:bg-primary transition-smooth flex items-center justify-center group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-smooth" />
              </a>
            ))}
          </div>
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made by{" "}
            <span className="gradient-primary bg-clip-text text-transparent font-semibold">
              Zoe dev
            </span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Zoe Dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;