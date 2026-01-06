import Navigation from "@/components/Navigation";
import ImpactMetric from "@/components/ImpactMetric";
import Footer from "@/components/Footer";
import { BookOpen, TrendingUp, Users } from "lucide-react";

const impactMetrics = [
  {
    value: "~$65K",
    label: "Annual Savings",
    description: "Cost prevention through SKU validation system at HD Supply",
    accentColor: "primary" as const,
  },
  {
    value: "75%",
    label: "Time Reduction",
    description: "Developer onboarding time cut from ~8 weeks to ~2 weeks",
    accentColor: "accent" as const,
  },
  {
    value: "~320%",
    label: "Efficiency Boost",
    description: "NLP preprocessing and data scraping time reduction via custom Python lemmatizer",
    accentColor: "primary" as const,
  },
  {
    value: "20+ GB",
    label: "Data Processed",
    description: "Unstructured text analyzed and translated into executive insights at Amazon",
    accentColor: "accent" as const,
  },
];

const Research = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
              Research<span className="text-primary"> & Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Academic contributions and quantitative results from my work in NLP research,
              classical languages, and enterprise software development.
            </p>
          </div>
        </div>
      </section>

      {/* NLP Research Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="card-elevated rounded-2xl p-8 md:p-12 border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
                    NLP & Classical Languages Research
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    Lead Researcher at University of Florida
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Led research applying modern NLP techniques to ancient Greek and
                  Latin texts, bridging the gap between classical scholarship and machine learning.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card-glass rounded-xl p-6">
                    <div className="text-3xl font-display font-bold text-gradient mb-2">~93%</div>
                    <div className="font-semibold text-foreground mb-1">Accuracy Rate</div>
                    <p className="text-sm text-muted-foreground">
                      Achieved on validation sets through end-to-end training pipelines with
                      automated data ingestion
                    </p>
                  </div>

                  <div className="card-glass rounded-xl p-6">
                    <div className="text-3xl font-display font-bold text-gradient-accent mb-2">
                      ~18%
                    </div>
                    <div className="font-semibold text-foreground mb-1">F1-Score Boost</div>
                    <p className="text-sm text-muted-foreground">
                      Improvement in sentiment/emotion classification through fine-tuned BERT models
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>Managing a team of 20 researchers</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4" />
                    <span>Co-authored two conference abstracts</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="w-4 h-4" />
                    <span>150K+ ancient texts processed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Business Impact
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Quantifiable results from internships and research work demonstrating real-world
              value.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {impactMetrics.map((metric, index) => (
              <div
                key={metric.label}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ImpactMetric {...metric} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Breakdown */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Amazon */}
            <div className="card-glass rounded-2xl p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">Amazon</h3>
                  <p className="text-sm text-muted-foreground">
                    NLP & Data Engineering Externship
                  </p>
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Sep 2025 - Dec 2025
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  Developed Python NLP pipeline using NLTK to preprocess and analyze 20+ GB of
                  unstructured text data across 500+ employee feedback documents
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  Engineered data transformation workflows producing analytical visualizations to
                  surface operational risk signals
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  Translated NLP results into data-backed insights presented to Amazon leadership
                </li>
              </ul>
            </div>

            {/* HD Supply */}
            <div className="card-glass rounded-2xl p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">HD Supply</h3>
                  <p className="text-sm text-muted-foreground">Software Engineering Intern</p>
                </div>
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                  May 2025 - July 2025
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  Cut developer onboarding time by ~75% (~8 to ~2 weeks) by writing UI–API
                  documentation and personally onboarding 2+ new engineers
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  Built C# / SQL validation system to flag 30K inactive SKUs out of 163K, saving
                  ~$65K annually
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  Delivered React components integrated with .NET Core APIs for 3,600+ merchants
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Let's Connect
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Interested in collaborating or learning more about my work?
            </p>
            <a
              href="mailto:sheng.liu.0841@gmail.com"
              className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-colors glow-primary"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Research;
