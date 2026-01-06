import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  highlights?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  techStack,
  features,
  highlights,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <div className="group card-elevated rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="font-display font-bold text-2xl text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex gap-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>

      {/* Tech Stack */}
      <div className="mb-6">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-6">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
          Key Features
        </h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Highlights */}
      {highlights && highlights.length > 0 && (
        <div className="pt-4 border-t border-border">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Highlights
          </h4>
          <div className="flex flex-wrap gap-2">
            {highlights.map((highlight, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-muted text-foreground rounded-lg text-xs font-medium"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
