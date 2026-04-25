import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import { breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/faq");

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <section className="container-shell py-20">
        <SectionHeader
          eyebrow="FAQ"
          title="Clear answers for orthotics, coverage, fitting, and repairs."
          description="The original FAQ has been expanded and rewritten for readability while keeping the important customer questions."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-4xl">
          <FaqList />
        </div>
      </section>
      <CtaBand title="Still have a question?" description="Call or send a message and Adam Lab Orthotic will help with the next step." />
    </>
  );
}
