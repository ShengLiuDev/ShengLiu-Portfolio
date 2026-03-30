const MolidataBlog = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <div className="rounded-xl border border-accent/30 bg-accent/5 px-6 py-5 mb-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
          Sample Version
        </p>
        <p className="text-muted-foreground leading-relaxed text-base m-0">
          The link above points to a <strong className="text-foreground">free sample</strong> of
          Molidata with limited functionality. For access to the full paid version with all features,
          please{" "}
          <a
            href="mailto:sheng.liu.0841@gmail.com"
            className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
          >
            contact me
          </a>
          .
        </p>
      </div>

      <p className="text-muted-foreground text-lg leading-relaxed">
        No blog post available yet. Please check back later.
      </p>
    </div>
  );
};

export default MolidataBlog;
