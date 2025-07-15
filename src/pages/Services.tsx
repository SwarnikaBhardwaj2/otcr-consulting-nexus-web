import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const fullTimeProjects = {
    title: "Full-Semester Projects",
    duration: "16 weeks",
    commitment: "Full-time engagement",
    description: "Comprehensive strategic consulting engagements that provide deep, transformational insights and implementation support.",
    features: [
      "Comprehensive market analysis",
      "Strategic roadmap development",
      "Implementation planning",
      "Executive presentation",
      "Post-project support"
    ],
    timeline: [
      { week: "Weeks 1-2", activity: "Discovery & Scoping", details: "Stakeholder interviews, data gathering, and project scope refinement" },
      { week: "Weeks 3-6", activity: "Research & Analysis", details: "Market research, competitive analysis, and data modeling" },
      { week: "Weeks 7-10", activity: "Strategy Development", details: "Framework development, scenario planning, and option analysis" },
      { week: "Weeks 11-14", activity: "Solution Design", details: "Detailed recommendations and implementation roadmap" },
      { week: "Weeks 15-16", activity: "Delivery & Handoff", details: "Final presentation, documentation, and transition planning" }
    ],
    pricing: "Contact for custom pricing",
    industries: ["Technology", "Healthcare", "Financial Services", "Retail", "Manufacturing"]
  };

  const halfSemesterProjects = {
    title: "Half-Semester Projects",
    duration: "8 weeks",
    commitment: "Focused engagement",
    description: "Targeted consulting projects that address specific business challenges with rapid turnaround and actionable insights.",
    features: [
      "Focused problem solving",
      "Rapid analysis and insights",
      "Actionable recommendations",
      "Stakeholder presentation",
      "Quick implementation guide"
    ],
    timeline: [
      { week: "Week 1", activity: "Project Kickoff", details: "Problem definition, stakeholder alignment, and data collection setup" },
      { week: "Weeks 2-3", activity: "Analysis Phase", details: "Data analysis, research, and initial hypothesis testing" },
      { week: "Weeks 4-5", activity: "Solution Development", details: "Recommendation formulation and validation" },
      { week: "Weeks 6-7", activity: "Refinement", details: "Solution refinement based on feedback and feasibility analysis" },
      { week: "Week 8", activity: "Final Delivery", details: "Presentation to stakeholders and handoff documentation" }
    ],
    pricing: "Starting from $15,000",
    industries: ["Startups", "SMEs", "Non-profits", "Government", "Education"]
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose from our flexible engagement models designed to meet your specific business needs 
              and timeline requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Full-Time Projects */}
            <Card className="shadow-strong">
              <CardHeader className="bg-gradient-primary text-primary-foreground">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Calendar size={28} />
                  {fullTimeProjects.title}
                </CardTitle>
                <div className="flex gap-4 mt-2">
                  <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                    {fullTimeProjects.duration}
                  </Badge>
                  <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                    {fullTimeProjects.commitment}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <p className="text-muted-foreground">{fullTimeProjects.description}</p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {fullTimeProjects.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Target Industries</h4>
                  <div className="flex flex-wrap gap-2">
                    {fullTimeProjects.industries.map((industry, index) => (
                      <Badge key={index} variant="outline">{industry}</Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Investment</span>
                    <span className="font-semibold text-foreground">{fullTimeProjects.pricing}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Half-Semester Projects */}
            <Card className="shadow-strong">
              <CardHeader className="bg-gradient-accent text-accent-foreground">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Clock size={28} />
                  {halfSemesterProjects.title}
                </CardTitle>
                <div className="flex gap-4 mt-2">
                  <Badge variant="secondary" className="bg-accent-foreground/20 text-accent-foreground">
                    {halfSemesterProjects.duration}
                  </Badge>
                  <Badge variant="secondary" className="bg-accent-foreground/20 text-accent-foreground">
                    {halfSemesterProjects.commitment}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <p className="text-muted-foreground">{halfSemesterProjects.description}</p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {halfSemesterProjects.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Target Industries</h4>
                  <div className="flex flex-wrap gap-2">
                    {halfSemesterProjects.industries.map((industry, index) => (
                      <Badge key={index} variant="outline">{industry}</Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Investment</span>
                    <span className="font-semibold text-foreground">{halfSemesterProjects.pricing}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Sections */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Project Timelines
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our structured approach ensures consistent delivery and maximum value creation 
              throughout the engagement lifecycle.
            </p>
          </div>

          <div className="space-y-16">
            {/* Full-Time Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Full-Semester Project Timeline
              </h3>
              <div className="space-y-6">
                {fullTimeProjects.timeline.map((phase, index) => (
                  <Card key={index} className="shadow-medium">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-shrink-0">
                          <Badge variant="default" className="text-sm px-3 py-1">
                            {phase.week}
                          </Badge>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">{phase.activity}</h4>
                          <p className="text-muted-foreground text-sm">{phase.details}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Half-Semester Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Half-Semester Project Timeline
              </h3>
              <div className="space-y-6">
                {halfSemesterProjects.timeline.map((phase, index) => (
                  <Card key={index} className="shadow-medium">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-shrink-0">
                          <Badge variant="secondary" className="text-sm px-3 py-1">
                            {phase.week}
                          </Badge>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">{phase.activity}</h4>
                          <p className="text-muted-foreground text-sm">{phase.details}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss which engagement model best fits your needs and timeline. 
            Our team is ready to help you achieve your strategic objectives.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;