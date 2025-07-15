import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Users, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-bg.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const metrics = [
    {
      icon: Users,
      value: "50+",
      label: "Clients Served",
      description: "Successful partnerships with leading organizations"
    },
    {
      icon: Award,
      value: "Top",
      label: "Student Talent",
      description: "Elite consultants from premier universities"
    },
    {
      icon: Target,
      value: "10+",
      label: "Years of Impact",
      description: "Proven track record of delivering results"
    }
  ];

  const testimonials = [
    {
      quote: "OTCR Consulting delivered exceptional strategic insights that transformed our market approach. Their student consultants brought fresh perspectives and rigorous analysis.",
      author: "Sarah Johnson",
      role: "CEO, TechVenture Inc.",
      rating: 5
    },
    {
      quote: "The professionalism and quality of work exceeded our expectations. OTCR's team helped us identify new growth opportunities we hadn't considered.",
      author: "Michael Chen",
      role: "VP Strategy, Innovation Labs",
      rating: 5
    },
    {
      quote: "Working with OTCR was seamless. They understood our challenges quickly and provided actionable recommendations that we implemented immediately.",
      author: "Emily Rodriguez",
      role: "Director, Operations Plus",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            OTCR
            <span className="block text-4xl md:text-6xl text-accent mt-2">
              Consulting
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Empowering businesses through strategic consulting and innovative solutions. 
            Led by top student talent, delivering real-world impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-white border-white hover:bg-white hover:text-primary">
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Proven Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our track record speaks for itself. We deliver measurable results 
              that drive business growth and transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center p-8 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 bg-gradient-primary rounded-full">
                      <metric.icon size={32} className="text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {metric.value}
                    </div>
                    <div className="text-xl font-semibold text-foreground mb-2">
                      {metric.label}
                    </div>
                    <p className="text-muted-foreground">
                      {metric.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Hear from the leaders who have 
              experienced the OTCR difference firsthand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-medium hover:shadow-strong transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="text-foreground italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonial.role}
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how OTCR Consulting can help you achieve your strategic objectives 
            and unlock new growth opportunities.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
