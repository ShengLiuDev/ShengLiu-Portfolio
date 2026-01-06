import { useState } from "react";

interface TechItem {
  name: string;
  category: "language" | "framework" | "tool";
}

const techData: TechItem[] = [
  // Languages
  { name: "Python", category: "language" },
  { name: "Java", category: "language" },
  { name: "C++", category: "language" },
  { name: "C#", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "SQL", category: "language" },
  { name: "MATLAB", category: "language" },
  // Frameworks
  { name: "React", category: "framework" },
  { name: "Flask", category: "framework" },
  { name: ".NET Core", category: "framework" },
  { name: "PyTorch", category: "framework" },
  { name: "TensorFlow", category: "framework" },
  { name: "Hugging Face", category: "framework" },
  { name: "Pandas", category: "framework" },
  { name: "NumPy", category: "framework" },
  { name: "OpenCV", category: "framework" },
  { name: "MUI", category: "framework" },
  // Tools
  { name: "Docker", category: "tool" },
  { name: "AWS EC2", category: "tool" },
  { name: "AWS RDS", category: "tool" },
  { name: "AWS S3", category: "tool" },
  { name: "Firebase", category: "tool" },
  { name: "Git", category: "tool" },
  { name: "Jupyter", category: "tool" },
  { name: "Jenkins", category: "tool" },
];

const categoryLabels = {
  language: "Languages",
  framework: "Frameworks & Libraries",
  tool: "Tools & Deployment",
};

const categoryColors = {
  language: "hover:bg-primary hover:text-primary-foreground hover:border-primary",
  framework: "hover:bg-accent hover:text-accent-foreground hover:border-accent",
  tool: "hover:bg-secondary hover:text-secondary-foreground hover:border-secondary-foreground/20",
};

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const categories = ["language", "framework", "tool"] as const;

  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <div key={category}>
          <h3 className="font-display font-semibold text-lg text-foreground mb-4">
            {categoryLabels[category]}
          </h3>
          <div className="flex flex-wrap gap-3">
            {techData
              .filter((tech) => tech.category === category)
              .map((tech) => (
                <div
                  key={tech.name}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  className={`px-4 py-2 rounded-lg border border-border bg-card text-foreground font-medium text-sm cursor-default transition-all duration-300 ${categoryColors[tech.category]} ${
                    hoveredTech === tech.name
                      ? "scale-110 shadow-lg z-10"
                      : "scale-100"
                  }`}
                >
                  {tech.name}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
