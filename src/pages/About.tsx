import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Target, Lightbulb, TrendingUp, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const leadership = [
    {
      name: "Alexandra Chen",
      role: "Managing Director",
      bio: "Former McKinsey consultant with expertise in digital transformation and strategy.",
      education: "Harvard Business School, MBA",
      linkedin: "#",
      email: "alexandra@otcrconsulting.com",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      role: "Strategy Lead",
      bio: "Ex-BCG principal specializing in operational excellence and market expansion.",
      education: "Stanford Graduate School of Business",
      linkedin: "#",
      email: "michael@otcrconsulting.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Sarah Thompson",
      role: "Analytics Director",
      bio: "Data science expert with background in machine learning and business intelligence.",
      education: "MIT Sloan School of Management",
      linkedin: "#",
      email: "sarah@otcrconsulting.com",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "Client Relations Head",
      bio: "Relationship management specialist with extensive experience in client success.",
      education: "Wharton School, University of Pennsylvania",
      linkedin: "#",
      email: "david@otcrconsulting.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const teamStructure = [
    {
      level: "Managing Directors",
      description: "Senior leadership with 10+ years of consulting experience",
      count: "2-3 members",
      responsibilities: ["Strategic oversight", "Client relationships", "Business development"]
    },
    {
      level: "Senior Consultants",
      description: "Experienced team leads with specialized domain expertise",
      count: "5-8 members",
      responsibilities: ["Project leadership", "Quality assurance", "Mentoring junior staff"]
    },
    {
      level: "Associates",
      description: "Graduate-level consultants with 2-4 years of experience",
      count: "10-15 members",
      responsibilities: ["Analysis and research", "Client presentations", "Implementation support"]
    },
    {
      level: "Analysts",
      description: "Top undergraduate and recent graduate talent",
      count: "15-20 members",
      responsibilities: ["Data analysis", "Market research", "Modeling and forecasting"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">OTCR Consulting</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We are a premier student-led consulting organization dedicated to delivering 
              exceptional strategic solutions while developing the next generation of business leaders.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              OTCR Consulting bridges the gap between academic excellence and real-world business impact. 
              We combine rigorous analytical frameworks with fresh perspectives to solve complex business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-gradient-primary rounded-full">
                    <Target size={32} className="text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Strategic Planning</h3>
                <p className="text-muted-foreground">
                  Comprehensive market analysis and strategic roadmap development
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-gradient-primary rounded-full">
                    <TrendingUp size={32} className="text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Growth Optimization</h3>
                <p className="text-muted-foreground">
                  Data-driven approaches to accelerate business growth and expansion
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-gradient-primary rounded-full">
                    <Lightbulb size={32} className="text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Innovation Consulting</h3>
                <p className="text-muted-foreground">
                  Digital transformation and innovation strategy implementation
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-gradient-primary rounded-full">
                    <Users size={32} className="text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Operational Excellence</h3>
                <p className="text-muted-foreground">
                  Process optimization and organizational efficiency improvements
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Led by experienced professionals from top-tier consulting firms and business schools, 
              our leadership team brings world-class expertise to every engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="p-6 shadow-medium hover:shadow-strong transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-foreground">{leader.name}</h3>
                    <Badge variant="secondary" className="mb-2">{leader.role}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{leader.bio}</p>
                  <p className="text-xs text-muted-foreground font-medium">{leader.education}</p>
                  <div className="flex justify-center space-x-3 pt-2">
                    <a href={leader.linkedin} className="text-muted-foreground hover:text-primary">
                      <Linkedin size={18} />
                    </a>
                    <a href={`mailto:${leader.email}`} className="text-muted-foreground hover:text-primary">
                      <Mail size={18} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Team Structure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our hierarchical structure ensures quality delivery while providing clear 
              career progression paths for our talented team members.
            </p>
          </div>
          
          <div className="space-y-6">
            {teamStructure.map((level, index) => (
              <Card key={index} className="p-6 shadow-medium">
                <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{level.level}</h3>
                      <Badge variant="outline">{level.count}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">{level.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {level.responsibilities.map((responsibility, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {responsibility}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Join Our Team or Partner With Us
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether you're a talented student looking to gain consulting experience or a 
            business seeking strategic guidance, we'd love to connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Partner With Us</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;