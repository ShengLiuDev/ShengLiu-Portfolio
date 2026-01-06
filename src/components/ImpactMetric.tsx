interface ImpactMetricProps {
  value: string;
  label: string;
  description: string;
  accentColor?: "primary" | "accent";
}

const ImpactMetric = ({
  value,
  label,
  description,
  accentColor = "primary",
}: ImpactMetricProps) => {
  return (
    <div className="card-glass rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
      <div
        className={`font-display font-bold text-4xl md:text-5xl mb-2 ${
          accentColor === "primary" ? "text-gradient" : "text-gradient-accent"
        }`}
      >
        {value}
      </div>
      <div className="font-semibold text-foreground mb-2">{label}</div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default ImpactMetric;
