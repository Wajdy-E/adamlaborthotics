import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import { business, repairProcess } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/services/shoe-repair");

const repairServices = [
  "Heel replacement and rebuilding",
  "Sole repair and resoling guidance",
  "Stitching and sewing repairs",
  "Zipper repair for boots and footwear",
  "Comfort adjustments and practical recommendations",
  "Drop-off assessments during business hours",
];

export default function ShoeRepairPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema("Shoe Repair", "/services/shoe-repair"),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Shoe Repair", path: "/services/shoe-repair" },
          ]),
        ]}
      />
      <section className="container-shell grid gap-12 py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">Shoe Repair</p>
          <h1 className="mt-5 text-4xl font-semibold text-stone-900 sm:text-6xl">
            Keep your favorite footwear working longer.
          </h1>
          <p className="mt-6 text-xl leading-9 text-stone-600">
            From worn heels to sole repair, sewing, and zippers, Adam Lab Orthotic helps restore shoes and boots with
            practical craftsmanship.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={business.mapHref} target="_blank" rel="noreferrer">
              Get Directions
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Ask About a Repair
            </ButtonLink>
          </div>
        </div>
        <div className="interactive-card animate-soft-scale rounded-[2.5rem] bg-[var(--primary-dark)] p-8 !text-white card-shadow">
          <h2 className="text-3xl font-semibold !text-white">Drop-off friendly</h2>
          <p className="mt-4 text-teal-50/85">
            Bring footwear during business hours for an assessment and clear repair recommendation.
          </p>
          <div className="mt-6 grid gap-3">
            {business.hours.map((item) => (
              <div className="rounded-2xl bg-white/12 px-4 py-3 font-bold" key={item.label}>
                {item.label}: {item.value}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/75 section-padding">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Repairs"
            title="Repair services for everyday shoes, boots, and comfort footwear."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repairServices.map((item) => (
              <div className="animate-fade-up rounded-[2rem] border border-stone-200 bg-[#f4eadc] p-6 text-lg font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[#efe0cd]" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="How It Works"
            title="A simple drop-off flow."
            description="The new page gives repair customers confidence before they arrive."
          />
          <div className="grid gap-4">
            {repairProcess.map((item, index) => (
              <div className="interactive-card animate-fade-up rounded-[2rem] bg-white p-6 card-shadow transition duration-300 hover:-translate-y-1 hover:shadow-xl" key={item}>
                <p className="text-sm font-semibold text-[var(--primary)]">Step {index + 1}</p>
                <p className="mt-2 text-xl font-semibold text-stone-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Need a heel, sole, stitch, or zipper repair?" description="Visit the Hamilton location or send a quick message with what needs fixing." />
    </>
  );
}
