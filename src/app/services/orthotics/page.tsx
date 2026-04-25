import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import { business, conditions, orthoticsProcess } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/services/orthotics");

export default function OrthoticsPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema("Custom-Made Orthotics", "/services/orthotics"),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Custom Orthotics", path: "/services/orthotics" },
          ]),
        ]}
      />
      <section className="container-shell grid gap-12 py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">Custom Orthotics</p>
          <h1 className="mt-5 text-4xl font-semibold text-stone-900 sm:text-6xl">
            Support made for your feet, your shoes, and your routine.
          </h1>
          <p className="mt-6 text-xl leading-9 text-stone-600">
            Adam Lab Orthotic creates custom insoles designed around your foot structure, symptoms, footwear, and daily
            activity so support feels practical in real life.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Start an Inquiry</ButtonLink>
            <ButtonLink href={business.phoneHref} variant="secondary">
              Call {business.phone}
            </ButtonLink>
          </div>
        </div>
        <div className="rounded-[2.5rem] border border-stone-200 bg-white/95 p-8 card-shadow">
          <h2 className="text-2xl font-semibold">Often used for</h2>
          <div className="mt-6 grid gap-3">
            {conditions.slice(0, 6).map((condition) => (
              <div className="rounded-2xl bg-[#f4eadc] px-4 py-3 font-semibold text-stone-800" key={condition}>
                {condition}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/75 section-padding">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Process"
            title="A clear path from assessment to comfortable wear."
            description="The orthotics page explains how the lab moves from understanding your pain to building and fitting support."
            align="center"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {orthoticsProcess.map((item) => (
              <article className="interactive-card animate-fade-up rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md" key={item.step}>
                <p className="text-sm font-semibold text-[var(--primary)]">{item.step}</p>
                <h2 className="mt-3 text-xl font-semibold">{item.title}</h2>
                <p className="mt-3 leading-7 text-stone-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-shell grid gap-8 lg:grid-cols-3">
          {["Insurance documentation", "Direct billing support", "1-year guarantee"].map((item) => (
            <div className="interactive-card animate-fade-up rounded-[2rem] bg-white p-7 card-shadow transition duration-300 hover:-translate-y-1 hover:shadow-xl" key={item}>
              <h2 className="text-2xl font-semibold">{item}</h2>
              <p className="mt-4 leading-7 text-stone-600">
                Get practical guidance before and after your visit so the process feels straightforward.
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Have a prescription or insurance question?" description="Bring your documentation or contact the lab before visiting. Adam Lab Orthotic can help you understand the next step." />
    </>
  );
}
