export const SITE = {
  url: "https://spacedev.io",
  name: "SpaceDev",
  defaultTitle: "SpaceDev | Web3 Development Services & Custom Software Solutions",
  defaultDescription:
    "SpaceDev is a blockchain development company offering web and mobile app development, and IT staff augmentation services for scalable growth.",
  email: "info@spacedev.io",
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
  description: SITE.defaultDescription,
  // Disambiguates from the unrelated, defunct 1990s-2000s aerospace company
  // of the same name (acquired by Sierra Nevada Corporation), which currently
  // has no distinct Wikidata entry of its own.
  disambiguatingDescription:
    "SpaceDev is a software development and blockchain consulting company founded in 2015, headquartered across Miami, Montevideo, Buenos Aires and Medellin. Not to be confused with the historical aerospace company SpaceDev Inc., acquired by Sierra Nevada Corporation.",
  foundingDate: "2015",
  url: SITE.url,
  logo: `${SITE.url}/images/logo/spacedev-logo.svg`,
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE.email,
    contactType: "customer service",
  },
  address: [
    { "@type": "PostalAddress", addressLocality: "Miami", addressRegion: "FL", addressCountry: "US" },
    { "@type": "PostalAddress", addressLocality: "Montevideo", addressCountry: "UY" },
    { "@type": "PostalAddress", addressLocality: "Buenos Aires", addressCountry: "AR" },
    { "@type": "PostalAddress", addressLocality: "Medellín", addressCountry: "CO" },
  ],
  // sameAs is the supported way to point Google at third-party profiles
  // (including Clutch) without claiming the ratings as our own markup.
  sameAs: [
    SITE.social.linkedin,
    SITE.social.twitter,
    SITE.social.instagram,
    SITE.social.clutch,
    SITE.social.crunchbase,
  ],
  // NOTE: no aggregateRating here on purpose. A rating an organization publishes
  // about itself is a "self-serving review" under Google's rules: pages using
  // Organization markup for reviews the reviewed entity controls are ineligible
  // for the star review feature, and Search Console reports the item as invalid.
  // See https://developers.google.com/search/docs/appearance/structured-data/review-snippet
  // The 50+ five-star Clutch rating stays visible in page content and links to
  // the Clutch profile, which is the supported way to show third-party proof.
};
