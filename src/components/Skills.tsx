import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Linode"],
      color: "bg-gradient-primary"
    },
    {
      title: "Container & Orchestration",
      skills: ["Docker", "Kubernetes", "OpenShift", "Docker Swarm", "Helm"],
      color: "bg-gradient-secondary"
    },
    {
      title: "CI/CD & Automation",
      skills: ["Jenkins", "GitLab CI", "GitHub Actions", "CircleCI", "ArgoCD"],
      color: "bg-gradient-primary"
    },
    {
      title: "Infrastructure as Code",
      skills: ["Terraform", "Ansible", "CloudFormation", "Pulumi", "Chef"],
      color: "bg-gradient-secondary"
    },
    {
      title: "Monitoring & Logging",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"],
      color: "bg-gradient-primary"
    },
    {
      title: "Programming & Scripting",
      skills: ["Python", "Bash", "Go", "JavaScript", "YAML"],
      color: "bg-gradient-secondary"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          <span className="bg-gradient-primary bg-clip-text text-transparent">Technical Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`h-1 w-20 ${category.color} mb-4 rounded-full`}></div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-sm font-mono hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;