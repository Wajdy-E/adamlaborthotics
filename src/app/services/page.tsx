import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { services, trustPoints } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/services");

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <section className="container-shell py-20">
        <SectionHeader
          eyebrow="Services"
          title="Foot support and footwear repair, redesigned around clear next steps."
          description="Choose the service that fits your need: pain relief and alignment support, repairs for worn footwear, or guidance on orthopedic shoes."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-white/75 section-padding">
        <div className="container-shell">
          <SectionHeader eyebrow="What Makes It Easier" title="A local lab experience without unnecessary friction." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => (
              <article className="interactive-card animate-fade-up rounded-[2rem] border border-stone-200 bg-white/80 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md" key={point.title}>
                <h2 className="text-xl font-semibold">{point.title}</h2>
                <p className="mt-3 leading-7 text-stone-600">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Not sure which service you need?" description="Call or send a message with your symptoms, shoe issue, or insurance question and Adam Lab Orthotic will help point you in the right direction." />
    </>
  );
}
