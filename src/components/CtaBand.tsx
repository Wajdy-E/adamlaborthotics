import { business } from "@/lib/site-data";
import { ButtonLink } from "./ButtonLink";

type CtaBandProps = {
  title?: string;
  description?: string;
};

export function CtaBand({
  title = "Ready for better support or a repair quote?",
  description = "Call, send a message, or visit the lab during business hours. No appointment is usually necessary for shoe repair drop-offs.",
}: CtaBandProps) {
  return (
    <section className="container-shell py-6">
      <div className="interactive-card animate-soft-scale overflow-hidden rounded-[2.5rem] bg-[var(--primary-dark)] p-8 !text-white card-shadow sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-teal-100">Contact Adam Lab</p>
            <h2 className="mt-3 text-3xl font-semibold !text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-teal-50/85">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="secondary">
              Contact Us
            </ButtonLink>
            <ButtonLink href={business.phoneHref} className="bg-[var(--accent)] hover:bg-[#875b32]">
              Call Now
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
