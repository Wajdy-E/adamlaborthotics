import { business } from "@/lib/site-data";

export function MapEmbed() {
  return (
    <iframe
      allowFullScreen
      className="animate-soft-scale min-h-96 w-full rounded-[2rem] border-0 card-shadow"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src={business.mapEmbed}
      title={`${business.name} location map`}
    />
  );
}
