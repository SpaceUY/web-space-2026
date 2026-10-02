import { authors, type Author } from "../data/authors";
import { offices, stats } from "../data/site-content";

export const SITE = {
  url: "https://spacedev.io",
  name: "SpaceDev",
  legalName: "SpaceDev LLC",
  slogan: "From idea to mainnet",
  defaultTitle: "SpaceDev | Web3 Development Services & Custom Software Solutions",
  defaultDescription:
    "SpaceDev is a blockchain development company offering web and mobile app development, and IT staff augmentation services for scalable growth.",
  email: "info@spacedev.io",
  bookCallUrl: "https://meetings.hubspot.com/federico-sendra/web-meetings-calendar",
  social: {
    twitter: "https://x.com/SpaceDevUy",
    linkedin: "https://www.linkedin.com/company/spacedev-io/",
    instagram: "https://www.instagram.com/spacedev.io",
    github: "https://github.com/SpaceUY",
    clutch: "https://clutch.co/profile/spacedev",
    goodfirms: "https://www.goodfirms.co/company/spacedev",
    crunchbase: "https://crunchbase.com/organization/spacedev",
    awsPartner: "https://partners.amazonaws.com/partners/0010h00001kLtZRAA0/SpaceDev",
    awsMarketplace: "https://aws.amazon.com/marketplace/pp/prodview-tkuck454u2bxa",
  },
} as const;

/**
 * Entity graph.
 *
 * Every entity is declared once with a stable @id and referenced by that @id
 * from the pages that mention it. The homepage carries the full Organization
 * node; every other page carries a slim one so a crawler that reads a single
 * URL still gets a name and a logo (search engines do not resolve an @id that
 * lives on another URL).
 */
export const ENTITY_ID = {
  organization: `${SITE.url}/#organization`,
  logo: `${SITE.url}/#logo`,
  website: `${SITE.url}/#website`,
  webpage: `${SITE.url}/#webpage`,
  blockaudit: `${SITE.url}/#blockaudit`,
} as const;

export const personId = (authorSlug: string) => `${SITE.url}/author/${authorSlug}#person`;

/** `path` is a site path without trailing slash (the site uses trailingSlash: "never"). */
export const serviceId = (path: string) => `${SITE.url}${path}#service`;

/** Path of the BlockAudit hub page, also the page that declares the BlockAudit brand. */
const BLOCKAUDIT_PATH = "/blockaudit-smart-contract-and-blockchain-security";

/**
 * Services listed in the Organization's offer catalog. Each `path` must be a
 * page that declares the same Service @id (ServicePageLayout does this from
 * its own URL), otherwise the reference points at nothing.
 */
const serviceCatalog = [
  { name: "Blockchain Development Services", path: "/blockchain-development-services" },
  { name: "Smart Contract Audits", path: BLOCKAUDIT_PATH },
  { name: "Asset Tokenization", path: "/blockchain-development-services/asset-tokenization" },
  { name: "DeFi Development", path: "/blockchain-development-services/industry/finance-and-fintech" },
  { name: "Web and Mobile App Development", path: "/innovative-web-and-mobile-solutions" },
  { name: "IT Staff Augmentation", path: "/staff-augmentation" },
] as const;

/** Short catalog label for a service page, or undefined when the page is not in the catalog. */
export const catalogServiceName = (path: string) => serviceCatalog.find((service) => service.path === path)?.name;

/** Topics with a clean Wikipedia article are linked as entities; the rest stay plain strings. */
const knowsAbout = [
  { name: "Blockchain", sameAs: "https://en.wikipedia.org/wiki/Blockchain" },
  { name: "Smart contract", sameAs: "https://en.wikipedia.org/wiki/Smart_contract" },
  { name: "Decentralized finance", sameAs: "https://en.wikipedia.org/wiki/Decentralized_finance" },
  { name: "Stablecoin", sameAs: "https://en.wikipedia.org/wiki/Stablecoin" },
  { name: "Web3", sameAs: "https://en.wikipedia.org/wiki/Web3" },
  "Asset tokenization",
  "Smart contract auditing",
  "Mobile app development",
  "IT staff augmentation",
] as const;

const organizationDescription =
  "SpaceDev is a blockchain development company that builds Web3, web and mobile products for startups and enterprises, and provides nearshore IT staff augmentation from Latin America.";

// Disambiguates from the unrelated, defunct 1990s-2000s aerospace company
// of the same name (acquired by Sierra Nevada Corporation), which currently
// has no distinct Wikidata entry of its own.
const disambiguatingDescription =
  "SpaceDev is a software development and blockchain consulting company founded in 2017, with offices in Miami, Montevideo, Buenos Aires and Medellín. Not to be confused with the historical aerospace company SpaceDev Inc., acquired by Sierra Nevada Corporation.";

const logoNode = {
  "@type": "ImageObject",
  "@id": ENTITY_ID.logo,
  url: `${SITE.url}/images/logo/spacedev-logo.svg`,
  width: 764,
  height: 402,
};

/** Reference to the Organization, for provider / publisher / creator / worksFor. */
export const organizationRef = {
  "@type": "Organization",
  "@id": ENTITY_ID.organization,
  name: SITE.name,
  url: `${SITE.url}/`,
} as const;

const postalAddress = (office: (typeof offices)[number]) => ({
  "@type": "PostalAddress",
  streetAddress: office.streetAddress,
  addressLocality: office.locality,
  ...("regionCode" in office && { addressRegion: office.regionCode }),
  postalCode: office.postalCode,
  addressCountry: office.countryCode,
});

const [headquarters] = offices;
const teamSize = stats.find((stat) => /team members/i.test(stat.label))?.value;

// sameAs is the supported way to point Google at third-party profiles
// (including Clutch) without claiming the ratings as our own markup. Shared by
// the full and the slim Organization so a crawler that reads a single page
// still gets the same profiles as one that reads the homepage.
const organizationSameAs = [
  SITE.social.linkedin,
  SITE.social.twitter,
  SITE.social.instagram,
  SITE.social.github,
  SITE.social.clutch,
  SITE.social.goodfirms,
  SITE.social.crunchbase,
  SITE.social.awsPartner,
  SITE.social.awsMarketplace,
];

// NOTE: no aggregateRating on purpose. A rating an organization publishes
// about itself is a "self-serving review" under Google's rules: pages using
// Organization markup for reviews the reviewed entity controls are ineligible
// for the star review feature, and Search Console reports the item as invalid.
// See https://developers.google.com/search/docs/appearance/structured-data/review-snippet
// The 50+ five-star Clutch rating stays visible in page content and links to
// the Clutch profile, which is the supported way to show third-party proof.
const organizationNode = {
  "@type": "Organization",
  "@id": ENTITY_ID.organization,
  name: SITE.name,
  legalName: SITE.legalName,
  alternateName: ["SpaceDev.io", "Space Dev"],
  slogan: SITE.slogan,
  url: `${SITE.url}/`,
  logo: logoNode,
  image: { "@id": ENTITY_ID.logo },
  description: organizationDescription,
  disambiguatingDescription,
  foundingDate: "2017",
  ...(teamSize && { numberOfEmployees: { "@type": "QuantitativeValue", minValue: teamSize } }),
  founder: authors.filter((author) => author.founder).map((author) => ({ "@id": personId(author.slug) })),
  address: postalAddress(headquarters),
  location: offices.map((office) => ({
    "@type": "Place",
    name: `${SITE.name} ${office.locality}`,
    address: postalAddress(office),
  })),
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Place", name: "Worldwide" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: SITE.email,
    url: SITE.bookCallUrl,
    availableLanguage: ["English", "Spanish"],
  },
  knowsAbout: knowsAbout.map((topic) =>
    typeof topic === "string" ? topic : { "@type": "Thing", name: topic.name, sameAs: topic.sameAs },
  ),
  brand: {
    "@type": "Brand",
    "@id": ENTITY_ID.blockaudit,
    name: "BlockAudit",
    description: "Smart contract audit and blockchain security division of SpaceDev.",
    url: `${SITE.url}${BLOCKAUDIT_PATH}`,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SpaceDev services",
    itemListElement: serviceCatalog.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", "@id": serviceId(service.path), name: service.name },
    })),
  },
  sameAs: organizationSameAs,
};

/** Person node shared by the homepage graph (founders) and the /author pages. */
export function personNode(author: Author) {
  const sameAs = [
    author.social?.linkedin,
    author.social?.twitter,
    author.social?.medium,
    author.social?.hashnode,
    author.social?.github,
  ].filter((url): url is string => Boolean(url));

  return {
    "@type": "Person",
    "@id": personId(author.slug),
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    url: `${SITE.url}/author/${author.slug}`,
    worksFor: { "@id": ENTITY_ID.organization },
    ...(author.avatar && { image: `${SITE.url}${author.avatar}` }),
    ...(author.knowsAbout && { knowsAbout: author.knowsAbout }),
    ...(author.awards?.length && { award: author.awards }),
    ...(sameAs.length > 0 && { sameAs }),
  };
}

/** Homepage only: the full entity graph. */
export function homeGraphJsonLd(pageTitle: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode,
      ...authors.filter((author) => author.founder).map(personNode),
      {
        "@type": "WebSite",
        "@id": ENTITY_ID.website,
        url: `${SITE.url}/`,
        name: SITE.name,
        inLanguage: "en-US",
        publisher: { "@id": ENTITY_ID.organization },
      },
      {
        "@type": "WebPage",
        "@id": ENTITY_ID.webpage,
        url: `${SITE.url}/`,
        name: pageTitle,
        isPartOf: { "@id": ENTITY_ID.website },
        about: { "@id": ENTITY_ID.organization },
        inLanguage: "en-US",
      },
    ],
  };
}

/** Every page except the homepage: the same @id, just enough to stand alone. */
export const organizationSlimJsonLd = {
  "@context": "https://schema.org",
  ...organizationRef,
  logo: logoNode,
  sameAs: organizationSameAs,
};
