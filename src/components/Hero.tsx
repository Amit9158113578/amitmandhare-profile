import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Senior DevOps Engineer";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{padding-top:'70px'}}>
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-glow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg mb-8">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">~/portfolio</span>
          </div>
          
          {/* Main heading with typing effect */}
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            <span className="text-foreground">Hello, I'm</span>
            <br />
            <span className="text-foreground text-5xl md:text-7xl">Amit Mandhare</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent inline-block min-h-[1.2em] text-3xl md:text-5xl mt-2">
              {displayText}
              <span className="animate-pulse">_</span>
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            5+ years of experience building and optimizing cloud infrastructure, 
            CI/CD pipelines, and automation solutions that power modern applications.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary"
              onClick={() => window.open('https://github.com/Amit9158113578', '_blank')}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary"
              onClick={() => window.open('https://www.linkedin.com/in/amit-mandhare-815344257/', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
