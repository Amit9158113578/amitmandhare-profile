import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="font-mono text-sm text-muted-foreground">
              © {currentYear} Amit Mandhare
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground flex items-center">
              Built with <Heart className="h-3 w-3 mx-1 text-primary" /> using React
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary"
              onClick={() => window.open('https://github.com/Amit9158113578', '_blank')}
            >
              <Github className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary"
              onClick={() => window.open('https://www.linkedin.com/in/amit-mandhare-815344257/', '_blank')}
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary"
              onClick={() => window.location.href = 'mailto:mandhareamit.27@gmail.com'}
            >
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;