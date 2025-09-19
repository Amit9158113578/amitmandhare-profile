import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, MapPin, Send, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the email
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "mandhareamit.27@gmail.com", href: "mailto:mandhareamit.27@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9158113578", href: "tel:+919158113578" },
    { icon: Linkedin, label: "LinkedIn", value: "amit-mandhare-815344257", href: "https://www.linkedin.com/in/amit-mandhare-815344257/" },
    { icon: Github, label: "GitHub", value: "Amit9158113578", href: "https://github.com/Amit9158113578" },
    { icon: MapPin, label: "Location", value: "Pune, India", href: null }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          <span className="bg-gradient-primary bg-clip-text text-transparent">Get In Touch</span>
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
            <h3 className="text-xl font-semibold mb-6 text-foreground">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-muted-foreground">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="bg-background/50 border-border focus:border-primary"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-muted-foreground">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="bg-background/50 border-border focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-muted-foreground">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="bg-background/50 border-border focus:border-primary min-h-[120px]"
                  placeholder="Your message..."
                />
              </div>
              
              <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out for opportunities, collaborations, or just a friendly chat about DevOps and cloud technologies.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Availability Card */}
            <Card className="p-6 bg-gradient-primary text-primary-foreground">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-primary-foreground rounded-full animate-pulse"></div>
                <span className="font-semibold">Currently Available</span>
              </div>
              <p className="text-sm opacity-90">
                Open to new opportunities and exciting DevOps challenges
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;