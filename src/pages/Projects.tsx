import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, TrendingUp, Users, Zap, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Projects = () => {
  const [industryFilter, setIndustryFilter] = useState("all");
  const [durationFilter, setDurationFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Digital Transformation Strategy",
      client: "TechCorp Industries",
      industry: "Technology",
      duration: "Full-Semester",
      type: "Strategy",
      description: "Comprehensive digital transformation roadmap resulting in 40% operational efficiency improvement and $2M cost savings.",
      results: ["40% efficiency improvement", "$2M cost savings", "New digital platforms launched"],
      timeline: "16 weeks",
      teamSize: "5 consultants",
      technologies: ["Data Analytics", "Process Automation", "Cloud Migration"]
    },
    {
      id: 2,
      title: "Market Entry Analysis",
      client: "HealthFirst Solutions",
      industry: "Healthcare",
      duration: "Half-Semester",
      type: "Market Research",
      description: "Strategic analysis for entering Southeast Asian markets, identifying $15M revenue opportunity.",
      results: ["$15M revenue opportunity identified", "3 target markets prioritized", "Go-to-market strategy developed"],
      timeline: "8 weeks",
      teamSize: "3 consultants",
      technologies: ["Market Analysis", "Financial Modeling", "Competitive Intelligence"]
    },
    {
      id: 3,
      title: "Supply Chain Optimization",
      client: "Global Manufacturing Co.",
      industry: "Manufacturing",
      duration: "Full-Semester",
      type: "Operations",
      description: "End-to-end supply chain redesign reducing costs by 25% and improving delivery times by 30%.",
      results: ["25% cost reduction", "30% faster delivery", "Improved supplier relationships"],
      timeline: "16 weeks",
      teamSize: "6 consultants",
      technologies: ["Supply Chain Analytics", "Logistics Optimization", "Vendor Management"]
    },
    {
      id: 4,
      title: "Customer Experience Enhancement",
      client: "RetailMax",
      industry: "Retail",
      duration: "Half-Semester",
      type: "Strategy",
      description: "Customer journey mapping and experience optimization resulting in 35% increase in customer satisfaction.",
      results: ["35% increase in satisfaction", "Streamlined customer journey", "Digital touchpoint optimization"],
      timeline: "8 weeks",
      teamSize: "4 consultants",
      technologies: ["Customer Analytics", "Journey Mapping", "Digital Experience"]
    },
    {
      id: 5,
      title: "Fintech Product Launch",
      client: "InnovatePay",
      industry: "Financial Services",
      duration: "Full-Semester",
      type: "Product Development",
      description: "Go-to-market strategy for new mobile payment platform, achieving 100K+ users in first quarter.",
      results: ["100K+ users acquired", "Successful product launch", "Market positioning established"],
      timeline: "16 weeks",
      teamSize: "7 consultants",
      technologies: ["Product Strategy", "Market Research", "User Experience Design"]
    },
    {
      id: 6,
      title: "Non-Profit Efficiency Study",
      client: "Community Care Foundation",
      industry: "Non-Profit",
      duration: "Half-Semester",
      type: "Operations",
      description: "Operational efficiency assessment resulting in 20% cost reduction while improving service quality.",
      results: ["20% cost reduction", "Improved service quality", "Process standardization"],
      timeline: "8 weeks",
      teamSize: "3 consultants",
      technologies: ["Process Analysis", "Impact Measurement", "Resource Optimization"]
    }
  ];

  const filteredProjects = projects.filter(project => {
    return (industryFilter === "all" || project.industry === industryFilter) &&
           (durationFilter === "all" || project.duration === durationFilter) &&
           (typeFilter === "all" || project.type === typeFilter);
  });

  const getIcon = (type: string) => {
    switch (type) {
      case "Strategy": return <TrendingUp size={20} />;
      case "Operations": return <Zap size={20} />;
      case "Market Research": return <Building2 size={20} />;
      case "Product Development": return <Users size={20} />;
      default: return <Building2 size={20} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Past Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our portfolio of successful consulting engagements across diverse industries 
              and business challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-muted-foreground" />
              <span className="font-medium text-foreground">Filter Projects:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={industryFilter} onValueChange={setIndustryFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="Retail">Retail</SelectItem>
                  <SelectItem value="Financial Services">Financial Services</SelectItem>
                  <SelectItem value="Non-Profit">Non-Profit</SelectItem>
                </SelectContent>
              </Select>

              <Select value={durationFilter} onValueChange={setDurationFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Durations</SelectItem>
                  <SelectItem value="Full-Semester">Full-Semester</SelectItem>
                  <SelectItem value="Half-Semester">Half-Semester</SelectItem>
                </SelectContent>
              </Select>

              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Project Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Strategy">Strategy</SelectItem>
                  <SelectItem value="Operations">Operations</SelectItem>
                  <SelectItem value="Market Research">Market Research</SelectItem>
                  <SelectItem value="Product Development">Product Development</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="shadow-medium hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-primary rounded-lg">
                        {getIcon(project.type)}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <p className="text-muted-foreground">{project.client}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="default">{project.industry}</Badge>
                    <Badge variant="secondary">{project.duration}</Badge>
                    <Badge variant="outline">{project.type}</Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Results</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <span className="text-sm text-muted-foreground">Timeline</span>
                      <p className="font-medium text-foreground">{project.timeline}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Team Size</span>
                      <p className="font-medium text-foreground">{project.teamSize}</p>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-sm text-muted-foreground mb-2 block">Technologies Used</span>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects match your current filters.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setIndustryFilter("all");
                  setDurationFilter("all");
                  setTypeFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join our portfolio of satisfied clients who have achieved remarkable results 
            through strategic consulting partnerships.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;