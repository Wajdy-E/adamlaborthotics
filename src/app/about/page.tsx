import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import { business, trustPoints } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/about");

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <section className="container-shell py-20">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">About Adam Lab</p>
          <h1 className="mt-5 text-4xl font-semibold text-stone-900 sm:text-6xl">
            A local Hamilton lab focused on comfort, craft, and practical care.
          </h1>
          <p className="mt-6 text-xl leading-9 text-stone-600">
            {business.name} serves people who need custom foot support and people who want to keep quality footwear in
            use. The redesigned site presents that dual expertise clearly: clinical support for movement and careful
            repair for shoes and boots.
          </p>
        </div>
      </section>

      <section className="bg-white/75 section-padding">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="What We Value"
            title="Straightforward service, reliable materials, and clearer next steps."
            description="The business combines practical recommendations with durable work, helping customers understand what they need before committing."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <article className="interactive-card animate-fade-up rounded-[2rem] border border-stone-200 bg-white/80 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md" key={point.title}>
                <h2 className="text-xl font-semibold">{point.title}</h2>
                <p className="mt-3 leading-7 text-stone-600">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="interactive-card animate-soft-scale container-shell rounded-[2.5rem] bg-[var(--primary-dark)] p-8 !text-white card-shadow sm:p-12">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-100">Location</p>
              <h2 className="mt-3 text-2xl font-semibold !text-white">{business.address}</h2>
              <p className="mt-3 text-teal-50/85">{business.locationHint}</p>
              <p className="mt-2 text-teal-50/85">{business.parkingHint}</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-100">Hours</p>
              <div className="mt-3 grid gap-2 text-lg font-semibold">
                {business.hours.map((item) => (
                  <p key={item.label}>
                    {item.label}: {item.value}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-100">Contact</p>
              <div className="mt-3 grid gap-2 text-lg font-semibold">
                <a href={business.phoneHref}>{business.phone}</a>
                <a href={business.emailHref}>{business.email}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
