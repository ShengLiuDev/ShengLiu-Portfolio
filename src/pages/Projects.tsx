import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

const projectsData = [
  {
    title: "Sublettee",
    description:
      "A comprehensive sublease aggregator and mapping tool that helps users find available sublets from multiple sources. Features real-time data aggregation from Facebook Marketplace, Apartments.com, and other platforms with an intuitive map-based interface.",
    techStack: ["Python", "React", "Google Maps API", "AWS EC2", "AWS RDS", "AWS S3"],
    features: [
      "Aggregates sublease listings from Facebook Marketplace, Apartments.com, and other sources through APIs and web scraping",
      "Geocodes and maps available sublets with an interactive Google Maps interface",
      "Stores listing data in AWS RDS and user-generated images in AWS S3",
      "Full application hosted on AWS EC2 with scalable architecture",
    ],
    highlights: ["Full-Stack", "Cloud Deployment", "Web Scraping", "Geolocation"],
  },
  {
    title: "UF HireLens",
    description:
      "An AI-driven mock interview platform that provides comprehensive feedback through advanced computer vision and natural language processing. Built as part of ColorStack leadership to help students prepare for technical interviews.",
    techStack: ["Python", "Flask", "React", "OpenCV", "Google Drive API", "BERT", "DeepSeek V3"],
    features: [
      "Designed Flask backend and Google Drive API workflows for secure video handling and storage",
      "Processed 100+ hours of sample mock interviews for training and validation",
      "Deployed computer vision modules and audio analysis (Librosa, STT) to extract interview metrics: pause frequency, tone, and eye-contact",
      "Integrated Hugging Face Transformers for speech-to-text transcription and sentiment analysis",
    ],
    highlights: ["AI/ML", "Computer Vision", "NLP", "Product Leadership"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
              Project<span className="text-accent"> Deep-Dive</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From "what I've done" to "how I built it"—exploring the technical decisions,
              architecture, and lessons learned from my key projects.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 max-w-4xl mx-auto">
            {projectsData.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Want to see more?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Check out my research work and the quantitative impact of my contributions.
            </p>
            <a
              href="/research"
              className="inline-flex px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold text-lg hover:bg-accent/90 transition-colors"
            >
              View Research & Impact
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
