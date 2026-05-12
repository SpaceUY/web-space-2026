export const SITE = {
  url: "https://spacedev.io",
  name: "SpaceDev",
  defaultTitle: "SpaceDev | Web3 Development Services & Custom Software Solutions",
  defaultDescription:
    "SpaceDev is a blockchain development company offering web and mobile app development, and IT staff augmentation services for scalable growth.",
  email: "info@spacedev.io",
  phone: "+1-754-249-6595",
  social: {
    twitter: "https://x.com/SpaceDevUy",
    linkedin: "https://www.linkedin.com/company/spacedev-uy/",
    instagram: "https://www.instagram.com/spacedev.io",
    clutch: "https://clutch.co/profile/spacedev",
    crunchbase: "https://crunchbase.com/organization/spacedev",
  },
} as const;

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SpaceDev",
  url: "https://spacedev.io",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://spacedev.io/blog?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/images/logo/spacedev-logo.svg`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phone,
    email: SITE.email,
    contactType: "customer service",
  },
  address: [
    { "@type": "PostalAddress", addressLocality: "Miami", addressRegion: "FL", addressCountry: "US" },
    { "@type": "PostalAddress", addressLocality: "Montevideo", addressCountry: "UY" },
    { "@type": "PostalAddress", addressLocality: "Buenos Aires", addressCountry: "AR" },
    { "@type": "PostalAddress", addressLocality: "Medellín", addressCountry: "CO" },
  ],
  sameAs: [
    SITE.social.linkedin,
    SITE.social.twitter,
    SITE.social.instagram,
    SITE.social.clutch,
    SITE.social.crunchbase,
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "40",
  },
};
