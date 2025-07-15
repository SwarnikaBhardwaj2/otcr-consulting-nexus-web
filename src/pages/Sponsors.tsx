import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sponsors = () => {
  const sponsors = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
      description: "Supporting our technology initiatives and providing cloud infrastructure for our digital transformation projects.",
      partnership: "Technology Partner",
      website: "https://microsoft.com",
      tier: "platinum"
    },
    {
      name: "Goldman Sachs",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/512px-Goldman_Sachs.svg.png",
      description: "Providing financial expertise and supporting our business development initiatives across multiple sectors.",
      partnership: "Strategic Advisor",
      website: "https://goldmansachs.com",
      tier: "platinum"
    },
    {
      name: "Deloitte",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/512px-Deloitte.svg.png",
      description: "Offering professional development opportunities and access to industry-leading consulting methodologies.",
      partnership: "Professional Development",
      website: "https://deloitte.com",
      tier: "gold"
    },
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png",
      description: "Providing cloud computing resources and training for our data analytics and machine learning projects.",
      partnership: "Cloud Infrastructure",
      website: "https://aws.amazon.com",
      tier: "gold"
    },
    {
      name: "McKinsey & Company",
      logo: "https://www.mckinsey.com/~/media/mckinsey/locations/europe%20and%20middle%20east/netherlands/images/mckinsey_logo_rgb_blue_200px.png",
      description: "Sharing industry insights and providing access to world-class consulting frameworks and tools.",
      partnership: "Knowledge Partner",
      website: "https://mckinsey.com",
      tier: "platinum"
    },
    {
      name: "Boston Consulting Group",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Boston_Consulting_Group_2020_logo.svg/512px-Boston_Consulting_Group_2020_logo.svg.png",
      description: "Supporting our research initiatives and providing mentorship for strategic consulting projects.",
      partnership: "Research Collaboration",
      website: "https://bcg.com",
      tier: "gold"
    },
    {
      name: "Google Cloud",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/512px-Google_Cloud_logo.svg.png",
      description: "Enabling our AI and machine learning capabilities with cutting-edge cloud computing tools.",
      partnership: "AI & Analytics",
      website: "https://cloud.google.com",
      tier: "silver"
    },
    {
      name: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/512px-Salesforce.com_logo.svg.png",
      description: "Supporting customer relationship management training and CRM implementation projects.",
      partnership: "CRM Solutions",
      website: "https://salesforce.com",
      tier: "silver"
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "platinum": return "bg-gradient-primary";
      case "gold": return "bg-gradient-accent";
      case "silver": return "bg-secondary";
      default: return "bg-muted";
    }
  };

  const getTierTextColor = (tier: string) => {
    switch (tier) {
      case "platinum": return "text-primary-foreground";
      case "gold": return "text-accent-foreground";
      case "silver": return "text-secondary-foreground";
      default: return "text-muted-foreground";
    }
  };

  const platinumSponsors = sponsors.filter(s => s.tier === "platinum");
  const goldSponsors = sponsors.filter(s => s.tier === "gold");
  const silverSponsors = sponsors.filter(s => s.tier === "silver");

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Sponsors</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're proud to partner with industry leaders who share our commitment to 
              excellence and innovation in business consulting.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Strategic Partnerships
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our sponsor relationships enable us to deliver exceptional value to clients while 
              providing our team with access to cutting-edge tools, technologies, and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 shadow-medium">
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold text-primary">8+</div>
                <h3 className="text-xl font-semibold text-foreground">Strategic Partners</h3>
                <p className="text-muted-foreground">
                  Leading organizations across technology, consulting, and financial services
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-medium">
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold text-primary">$2M+</div>
                <h3 className="text-xl font-semibold text-foreground">In Support Value</h3>
                <p className="text-muted-foreground">
                  Resources, tools, and expertise provided through our partnership network
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-medium">
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold text-primary">100%</div>
                <h3 className="text-xl font-semibold text-foreground">Project Success</h3>
                <p className="text-muted-foreground">
                  Enhanced capabilities leading to superior project outcomes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platinum Sponsors */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Platinum Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our highest-tier partners providing comprehensive support across multiple dimensions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platinumSponsors.map((sponsor, index) => (
              <Card key={index} className="shadow-strong hover:shadow-primary transition-all duration-300">
                <div className={`p-4 ${getTierColor(sponsor.tier)} rounded-t-lg`}>
                  <div className={`text-center font-semibold ${getTierTextColor(sponsor.tier)}`}>
                    Platinum Partner
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-16 mx-auto mb-4 object-contain"
                    />
                    <h3 className="text-xl font-semibold text-foreground">{sponsor.name}</h3>
                    <p className="text-sm text-primary font-medium">{sponsor.partnership}</p>
                  </div>
                  <p className="text-muted-foreground text-sm">{sponsor.description}</p>
                  <div className="pt-4">
                    <a
                      href={sponsor.website}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-sm">Visit Website</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gold & Silver Sponsors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Gold Sponsors */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Gold Partners
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Strategic collaborators providing specialized expertise and resources
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {goldSponsors.map((sponsor, index) => (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300">
                  <div className={`p-3 ${getTierColor(sponsor.tier)} rounded-t-lg`}>
                    <div className={`text-center font-semibold ${getTierTextColor(sponsor.tier)}`}>
                      Gold Partner
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-12 w-12 object-contain"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{sponsor.name}</h3>
                        <p className="text-sm text-primary font-medium">{sponsor.partnership}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{sponsor.description}</p>
                    <div className="pt-2">
                      <a
                        href={sponsor.website}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-sm">Visit Website</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Silver Partners
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Technology partners supporting our digital capabilities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {silverSponsors.map((sponsor, index) => (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300">
                  <div className={`p-3 ${getTierColor(sponsor.tier)} rounded-t-lg`}>
                    <div className={`text-center font-semibold ${getTierTextColor(sponsor.tier)}`}>
                      Silver Partner
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-12 w-12 object-contain"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{sponsor.name}</h3>
                        <p className="text-sm text-primary font-medium">{sponsor.partnership}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{sponsor.description}</p>
                    <div className="pt-2">
                      <a
                        href={sponsor.website}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-sm">Visit Website</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Become a Partner
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join our network of strategic partners and help shape the future of business consulting 
            while supporting the next generation of leaders.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">
              Partner With Us
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sponsors;