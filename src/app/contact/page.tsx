import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { MapEmbed } from "@/components/MapEmbed";
import { SectionHeader } from "@/components/SectionHeader";
import { business } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/contact");

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <section className="container-shell py-20">
        <SectionHeader
          eyebrow="Contact"
          title="Visit, call, or send a message."
          description="No appointment is usually necessary for shoe repair drop-offs. For orthotics, call or message with your questions, prescription details, or insurance needs."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="interactive-card animate-soft-scale rounded-[2rem] bg-[var(--primary-dark)] p-8 !text-white card-shadow">
            <h2 className="text-3xl font-semibold !text-white">Adam Lab Orthotic</h2>
            <div className="mt-6 grid gap-5 text-lg font-semibold">
              <a href={business.phoneHref}>{business.phone}</a>
              <a href={business.emailHref}>{business.email}</a>
              <a href={business.mapHref} target="_blank" rel="noreferrer">
                {business.address}
              </a>
            </div>
            <div className="mt-8 rounded-3xl bg-white/12 p-5">
              <h3 className="font-semibold">Hours</h3>
              <div className="mt-3 grid gap-2">
                {business.hours.map((item) => (
                  <p key={item.label}>
                    {item.label}: {item.value}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="container-shell pb-20">
        <MapEmbed />
      </section>
    </>
  );
}
