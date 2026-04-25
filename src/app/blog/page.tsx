import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import { blogPosts } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/blog");

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <section className="container-shell py-20">
        <SectionHeader
          eyebrow="Blog"
          title="Foot comfort and shoe repair advice for Hamilton customers."
          description="Helpful, locally focused articles about custom orthotics, insurance questions, footwear care, and common shoe repairs."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              className="interactive-card animate-fade-up group rounded-[2rem] border border-stone-200 bg-white/90 p-7 card-shadow transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
              href={`/blog/${post.slug}`}
              key={post.slug}
            >
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[var(--primary)]">
                <span>{post.category}</span>
                <span aria-hidden="true">•</span>
                <time dateTime={post.date}>
                  {new Intl.DateTimeFormat("en-CA", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }).format(new Date(`${post.date}T00:00:00`))}
                </time>
                <span aria-hidden="true">•</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-stone-900">{post.title}</h2>
              <p className="mt-4 leading-7 text-stone-600">{post.description}</p>
              <span className="mt-7 inline-block font-bold text-[var(--primary)] transition group-hover:translate-x-1">
                Read article →
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand title="Have a question after reading?" description="Call or send a message for orthotics, shoe repair, insurance, and footwear guidance." />
    </>
  );
}
