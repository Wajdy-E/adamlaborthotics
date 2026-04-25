import { faqs } from "@/lib/site-data";

type FaqListProps = {
  limit?: number;
};

export function FaqList({ limit }: FaqListProps) {
  const items = typeof limit === "number" ? faqs.slice(0, limit) : faqs;

  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details className="interactive-card animate-fade-up group rounded-3xl border border-stone-200 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md" key={item.question}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-stone-900">
            {item.question}
            <span className="text-2xl text-[var(--primary)] transition duration-300 group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 leading-7 text-stone-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
