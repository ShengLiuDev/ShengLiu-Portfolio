import Navigation from "@/components/Navigation";
import Timeline from "@/components/Timeline";
import TechStack from "@/components/TechStack";
import ResumePreview from "@/components/ResumePreview";
import Footer from "@/components/Footer";
import { ArrowDown, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const bgImagePath = `${import.meta.env.BASE_URL}malachowsky_3.jpg`;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-9"
          style={{ backgroundImage: `url(${bgImagePath})` }}
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-background/60" />
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-8 animate-fade-in">
              <MapPin className="w-4 h-4" />
              Orlando, FL → Atlanta, GA
            </div>

            <h1
              className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              Johnny Liu<span className="text-primary inline-block animate-bounce-in">.</span>
            </h1>

            <p
              className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              M.S in Computer Science Candidate at{" "}
              <span className="text-foreground font-semibold">Georgia Tech</span>
            </p>

            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              Full-stack engineer and NLP researcher with experience building data pipelines at{" "}
              <span className="text-primary font-medium">Amazon</span>, the 
              <span className="text-primary font-medium"> University of Florida</span>, and enterprise systems at{" "}
              <span className="text-primary font-medium">HD Supply</span>. Passionate about
              transforming complex data into actionable insights.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <Link
                to="/projects"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-colors glow-primary"
              >
                View Projects
              </Link>
              <Link
                to="/research"
                className="px-8 py-4 bg-card border border-border text-foreground rounded-xl font-semibold text-lg hover:bg-muted transition-colors"
              >
                Research & Impact
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Career Timeline
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From University of Florida to Georgia Tech
            </p>
          </div>

          <Timeline />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                Technical Expertise
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                A comprehensive toolkit spanning from systems programming to modern ML frameworks.
                Hover to explore.
              </p>
              <TechStack />
            </div>

            <div className="lg:sticky lg:top-24">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 text-center lg:text-left">
                Resume
              </h2>
              <p className="text-muted-foreground text-lg mb-8 text-center lg:text-left">
                View my complete professional background.
              </p>
              <ResumePreview />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
