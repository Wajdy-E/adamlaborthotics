import type { Metadata } from "next";
import { blogPosts, business, faqs, serviceArea, services, sitePages } from "./site-data";

export const defaultKeywords = [
  "custom orthotics Hamilton",
  "shoe repair Hamilton",
  "orthotics Hamilton Ontario",
  "orthopedic shoes Hamilton",
  "plantar fasciitis orthotics",
  "heel repair Hamilton",
  "sole repair Hamilton",
  "Adam Lab Orthotic",
];

export function absoluteUrl(path = "/") {
  return new URL(path, business.siteUrl).toString();
}

export function getPage(path: string) {
  return sitePages.find((page) => page.path === path) ?? sitePages[0];
}

export function pageMetadata(path: string, overrides: Partial<Metadata> = {}): Metadata {
  const page = getPage(path);
  const title = page.path === "/" ? `${page.title} | ${business.name}` : page.title;

  return {
    title,
    description: page.description,
    keywords: defaultKeywords,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      title,
      description: page.description,
      url: absoluteUrl(page.path),
      siteName: business.name,
      type: "website",
      locale: "en_CA",
      images: [
        {
          url: absoluteUrl("/logo.png"),
          width: 572,
          height: 248,
          alt: `${business.name} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.description,
      images: [absoluteUrl("/logo.png")],
    },
    ...overrides,
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    "@id": `${business.siteUrl}/#business`,
    name: business.name,
    url: business.siteUrl,
    logo: absoluteUrl("/logo.png"),
    image: absoluteUrl("/logo.png"),
    description: business.description,
    telephone: business.phone,
    email: business.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.city,
      addressRegion: business.region,
      postalCode: business.postalCode,
      addressCountry: business.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.latitude,
      longitude: business.longitude,
    },
    areaServed: serviceArea.map((area) => ({
      "@type": "City",
      name: area,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "11:00",
        closes: "17:00",
      },
    ],
    sameAs: [business.mapHref],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Orthotics and shoe repair services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: absoluteUrl(service.href),
          areaServed: serviceArea.join(", "),
          provider: {
            "@id": `${business.siteUrl}/#business`,
          },
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${business.siteUrl}/#website`,
    name: business.name,
    url: business.siteUrl,
    description: business.description,
    publisher: {
      "@id": `${business.siteUrl}/#business`,
    },
  };
}

export function serviceSchema(serviceTitle: string, path: string) {
  const service = services.find((item) => item.title === serviceTitle);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: service?.title ?? serviceTitle,
    description: service?.description ?? getPage(path).description,
    url: absoluteUrl(path),
    serviceType: serviceTitle,
    areaServed: serviceArea.map((area) => ({
      "@type": "City",
      name: area,
    })),
    provider: {
      "@id": `${business.siteUrl}/#business`,
    },
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema(slug: string) {
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  const url = absoluteUrl(`/blog/${post.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: business.name,
      url: business.siteUrl,
    },
    publisher: {
      "@id": `${business.siteUrl}/#business`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: absoluteUrl("/logo.png"),
    keywords: post.keywords.join(", "),
  };
}
