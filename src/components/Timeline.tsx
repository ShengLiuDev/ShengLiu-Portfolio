import { useEffect, useRef, useState } from "react";
import { GraduationCap, Briefcase, FlaskConical, Users } from "lucide-react";

interface TimelineItem {
  date: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  type: "education" | "work" | "research" | "leadership";
}

const timelineData: TimelineItem[] = [
  {
    date: "Aug 2025 – Aug 2027",
    title: "M.S. in Computer Science",
    organization: "Georgia Institute of Technology",
    location: "Atlanta, GA",
    description: "Pursuing advanced studies in Computer Science with focus on Machine Learning and NLP.",
    type: "education",
  },
  {
    date: "Sep 2025 – Dec 2025",
    title: "NLP & Data Engineering Extern",
    organization: "Amazon",
    location: "Remote",
    description: "Developed Python NLP pipeline to analyze 20+ GB of unstructured text across 500+ employee feedback documents.",
    type: "work",
  },
  {
    date: "May 2025 – July 2025",
    title: "Software Engineering Intern",
    organization: "HD Supply",
    location: "Atlanta, GA",
    description: "Built validation systems preventing $65K in annual losses. Delivered React/TypeScript components for 3,600+ merchants.",
    type: "work",
  },
  {
    date: "Jan 2024 – Aug 2025",
    title: "Lead Undergraduate Researcher",
    organization: "University of Florida",
    location: "Gainesville, FL",
    description: "Fine-tuned BERT models on 150K+ ancient texts achieving 93% accuracy. Led team of 20 researchers.",
    type: "research",
  },
  {
    date: "Jan 2023 – May 2025",
    title: "UF HireLens PM & ColorStack Leadership",
    organization: "ColorStack",
    location: "Gainesville, FL",
    description: "Led development of AI-driven mock interview platform with computer vision and NLP analysis.",
    type: "leadership",
  },
  {
    date: "Aug 2022 – Aug 2025",
    title: "B.S. in Computer Science",
    organization: "University of Florida",
    location: "Gainesville, FL",
    description: "Graduated Honors Cum Laude with 3.5/4.0 GPA.",
    type: "education",
  },
];

const iconMap = {
  education: GraduationCap,
  work: Briefcase,
  research: FlaskConical,
  leadership: Users,
};

const colorMap = {
  education: "bg-primary text-primary-foreground",
  work: "bg-accent text-accent-foreground",
  research: "bg-secondary text-secondary-foreground border border-border",
  leadership: "bg-muted text-foreground border border-border",
};

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: "-50px" }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5">
        <div className="absolute top-0 left-0 right-0 bg-primary animate-timeline-draw" />
      </div>

      <div className="space-y-8 md:space-y-12">
        {timelineData.map((item, index) => {
          const Icon = iconMap[item.type];
          const isVisible = visibleItems.has(index);
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`relative flex items-start gap-4 md:gap-0 ${
                isVisible ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-4 md:left-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center z-10 -translate-x-1/2 ${colorMap[item.type]} ${
                  isVisible ? "scale-100" : "scale-0"
                } transition-transform duration-500 delay-200`}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
              </div>

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-5/12 ${
                  isEven ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                } ${
                  isVisible
                    ? isEven
                      ? "animate-slide-in-left md:animate-fade-in"
                      : "animate-fade-in"
                    : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="card-glass rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow">
                  <span className="text-xs font-medium text-primary tracking-wide uppercase">
                    {item.date}
                  </span>
                  <h3 className="font-display font-semibold text-lg md:text-xl text-foreground mt-1">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground mt-1">
                    {item.organization} • {item.location}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
