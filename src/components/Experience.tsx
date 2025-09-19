import { Card } from "@/components/ui/card";
import { Calendar, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior DevOps Engineer Pvt Ltd",
      company: "Comsense Technologies.",
      period: "2023 - Present",
      description: "Leading DevOps initiatives for enterprise clients, architecting cloud solutions, and mentoring junior engineers.",
      achievements: [
        "Reduced deployment time by 70% through CI/CD optimization",
        "Architected multi-region AWS infrastructure serving 10M+ users",
        "Implemented GitOps workflow reducing configuration drift by 90%",
        "Led migration of 50+ microservices to Kubernetes"
      ]
    },
    {
      title: "DevOps Engineer",
      company: "Gallagher Service Center LLP",
      period: "2019 - 2022",
      description: "Managed cloud infrastructure and implemented automation solutions for various client projects.",
      achievements: [
        "Automated infrastructure provisioning using Terraform",
        "Built monitoring dashboards with Prometheus and Grafana",
        "Reduced infrastructure costs by 40% through optimization",
        "Implemented disaster recovery procedures"
      ]
    },
    {
      title: "Junior Devops Engineer",
      company: "ITcube Solution Pvt Ltd",
      period: "2018 - 2019",
      description: "Supported development teams with CI/CD pipelines and infrastructure management.",
      achievements: [
        "Set up Jenkins pipelines for 20+ applications",
        "Containerized legacy applications using Docker",
        "Implemented automated testing in CI/CD workflows",
        "Managed AWS EC2 instances and RDS databases"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          <span className="bg-gradient-primary bg-clip-text text-transparent">Professional Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-border"></div>
              )}
              
              <div className="flex gap-4 mb-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center relative z-10">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full animate-pulse-glow"></div>
                </div>
                
                {/* Content card */}
                <Card className="flex-grow p-6 bg-card/50 backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-primary mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-mono">{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="text-primary mr-2">▸</span>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
