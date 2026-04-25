import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts } from "@/lib/site-data";
import { absoluteUrl, articleSchema, breadcrumbSchema, defaultKeywords } from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  const path = `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: [...defaultKeywords, ...post.keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: absoluteUrl(path),
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      images: [
        {
          url: absoluteUrl("/logo.png"),
          width: 572,
          height: 248,
          alt: "Adam Lab Orthotic logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [absoluteUrl("/logo.png")],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          articleSchema(post.slug),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <article className="container-shell py-20">
        <div className="mx-auto max-w-3xl animate-fade-up">
          <Link className="font-semibold text-[var(--primary)] transition hover:text-[var(--primary-dark)]" href="/blog">
            ← Back to blog
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-[var(--primary)]">
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
          <h1 className="mt-5 text-4xl font-semibold text-stone-900 sm:text-6xl">{post.title}</h1>
          <p className="mt-6 text-xl leading-9 text-stone-600">{post.description}</p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-stone-200 bg-white/90 p-7 card-shadow sm:p-10">
          <div className="grid gap-10">
            {post.sections.map((section) => (
              <section className="animate-fade-up" key={section.heading}>
                <h2 className="text-2xl font-semibold text-stone-900">{section.heading}</h2>
                <div className="mt-4 grid gap-4 text-lg leading-8 text-stone-600">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-[#f4eadc] p-6">
            <h2 className="text-2xl font-semibold text-stone-900">Need personal guidance?</h2>
            <p className="mt-3 leading-7 text-stone-700">
              This article is general information. For medical advice, insurance requirements, or a repair quote, contact
              Adam Lab Orthotic directly.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Contact Us</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                View Services
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <h2 className="text-3xl font-semibold text-stone-900">Related articles</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {relatedPosts.map((related) => (
              <Link
                className="interactive-card rounded-3xl border border-stone-200 bg-white/90 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md"
                href={`/blog/${related.slug}`}
                key={related.slug}
              >
                <p className="text-sm font-semibold text-[var(--primary)]">{related.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-stone-900">{related.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </article>
      <CtaBand />
    </>
  );
}
