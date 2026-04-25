import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { business, conditions, services, trustPoints } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/");

export default function Home() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 craft-grid opacity-80" />
        <div className="container-shell grid gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div className="animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
              Hamilton custom orthotics and shoe repair
            </p>
            <h1 className="mt-5 text-4xl font-semibold text-stone-900 sm:text-6xl">
              Built for <span className="soft-underline">better steps</span>. Repaired for more miles.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-stone-600">
              {business.name} combines clinical foot support with hands-on footwear craftsmanship, helping you move
              comfortably and keep favorite shoes in service longer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Book or Contact</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Explore Services
              </ButtonLink>
            </div>
          </div>
          <div className="animate-soft-scale animate-delay-2 rounded-[2.5rem] bg-white p-5 card-shadow">
            <div className="animate-float rounded-[2rem] bg-gradient-to-br from-[var(--primary-dark)] via-[var(--primary)] to-[#8a623f] p-8 !text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-50">Walk-in friendly</p>
              <h2 className="mt-4 text-3xl font-semibold !text-white">Orthotics, footwear guidance, and shoe repair under one roof.</h2>
              <div className="mt-8 grid gap-4">
                {["Custom orthotic fitting", "Heel and sole repair", "Direct billing support", "1-year guarantee"].map(
                  (item) => (
                    <div className="rounded-2xl bg-white/12 p-4 font-semibold backdrop-blur transition duration-300 hover:bg-white/18 hover:pl-5" key={item}>
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Services"
            title="Care for your feet and the shoes that carry them."
            description="From custom orthotics to practical shoe repair, the new site makes each service easy to understand and easy to act on."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/75 section-padding">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Conditions"
            title="Support for common foot pain and alignment concerns."
            description="Custom orthotics can be part of a care plan for many painful or recurring foot and lower body issues."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {conditions.map((condition) => (
              <div className="animate-fade-up rounded-2xl border border-stone-200 bg-[#f4eadc] px-4 py-3 font-semibold text-stone-800 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[#efe0cd]" key={condition}>
                {condition}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-shell">
          <SectionHeader eyebrow="Why Choose Us" title="Local service with practical advantages." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => (
              <div className="interactive-card animate-fade-up rounded-[2rem] bg-white p-6 card-shadow transition duration-300 hover:-translate-y-1 hover:shadow-xl" key={point.title}>
                <h3 className="text-xl font-semibold text-stone-900">{point.title}</h3>
                <p className="mt-3 leading-7 text-stone-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />

      <section className="section-padding">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeader
            eyebrow="FAQ"
            title="Answers before you visit."
            description="Learn what to expect for custom orthotics, coverage, fitting, and shoe repair drop-offs."
          />
          <FaqList limit={4} />
        </div>
      </section>
    </>
  );
}
