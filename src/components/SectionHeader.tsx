type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} animate-fade-up`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.26em] text-[var(--primary)]">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold text-stone-900 sm:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-lg leading-8 text-stone-600">{description}</p> : null}
    </div>
  );
}
