import Link from "next/link";

type ServiceCardProps = {
  service: {
    title: string;
    href: string;
    eyebrow: string;
    description: string;
    highlights: string[];
  };
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      className="interactive-card animate-fade-up group flex h-full flex-col rounded-[2rem] border border-stone-200 bg-white/90 p-7 card-shadow transition duration-300 hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-xl"
      href={service.href}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{service.eyebrow}</p>
      <h3 className="mt-4 text-2xl font-semibold text-stone-900">{service.title}</h3>
      <p className="mt-4 flex-1 leading-7 text-stone-600">{service.description}</p>
      <ul className="mt-6 grid gap-2">
        {service.highlights.map((item) => (
          <li className="flex items-center gap-2 text-sm font-semibold text-stone-700" key={item}>
            <span className="h-2 w-2 rounded-full bg-[var(--accent)] transition duration-300 group-hover:scale-125" />
            {item}
          </li>
        ))}
      </ul>
      <span className="mt-7 font-bold text-[var(--primary)] transition group-hover:translate-x-1">
        Learn more →
      </span>
    </Link>
  );
}
