import { Card } from "@/components/ui/card";
import { Code2, Cloud, Cpu, Shield } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Cloud, text: "Cloud Architecture", description: "AWS, Azure, GCP" },
    { icon: Code2, text: "Infrastructure as Code", description: "Terraform, CloudFormation" },
    { icon: Cpu, text: "Container Orchestration", description: "Kubernetes, Docker" },
    { icon: Shield, text: "Security & Compliance", description: "DevSecOps practices" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            <span className="bg-gradient-primary bg-clip-text text-transparent">About Me</span>
          </h2>
          
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border shadow-card">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm a passionate DevOps Engineer with over 5 years of experience in designing, 
              implementing, and maintaining scalable cloud infrastructure. My expertise spans 
              across the entire DevOps lifecycle, from infrastructure provisioning to continuous 
              deployment and monitoring.
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              I specialize in automating complex workflows, optimizing system performance, and 
              ensuring high availability of critical applications. My approach combines technical 
              excellence with a deep understanding of business requirements to deliver solutions 
              that drive real value.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.text}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;