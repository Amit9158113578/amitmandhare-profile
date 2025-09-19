import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, GitBranch, Users, Zap, Shield } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Kubernetes Auto-Scaler",
      description: "Custom auto-scaling solution for Kubernetes clusters based on multiple metrics including custom application metrics.",
      tech: ["Kubernetes", "Go", "Prometheus", "Helm"],
      icon: Zap,
      highlights: [
        "Handles 1000+ pods across 50+ nodes",
        "Reduced infrastructure costs by 45%",
        "Sub-second scaling decisions"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Multi-Cloud Terraform Modules",
      description: "Reusable Terraform modules for deploying infrastructure across AWS, Azure, and GCP with consistent configurations.",
      tech: ["Terraform", "AWS", "Azure", "GCP"],
      icon: GitBranch,
      highlights: [
        "50+ production deployments",
        "Reduced provisioning time by 80%",
        "Full compliance automation"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "CI/CD Pipeline Framework",
      description: "Enterprise-grade CI/CD framework supporting multiple languages and deployment targets with built-in security scanning.",
      tech: ["Jenkins", "Docker", "Python", "GitLab"],
      icon: Shield,
      highlights: [
        "Processes 500+ builds daily",
        "Zero-downtime deployments",
        "Integrated security scanning"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Monitoring Dashboard Suite",
      description: "Comprehensive monitoring solution with custom dashboards for infrastructure, applications, and business metrics.",
      tech: ["Grafana", "Prometheus", "ELK Stack", "Python"],
      icon: Users,
      highlights: [
        "Real-time alerting system",
        "99.9% uptime achievement",
        "Custom metric aggregation"
      ],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          <span className="bg-gradient-primary bg-clip-text text-transparent">Featured Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
              
              <div className="space-y-4">
                <ul className="space-y-1">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-center text-sm text-muted-foreground">
                      <span className="text-primary mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;