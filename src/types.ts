// export interface Slide {
//   title: string;
//   image?: {
//     data: {
//       attributes: {
//         url: string;
//       };
//     };
//   };
// }

// export interface Milestone {
//   label: string;
//   value: number;
// }

// export interface HomepageData {
//   title: string;
//   subtitle: string;
//   buttonText: string;
//   buttonLink: string;
//   slide: Slide[];
//   milestone: Milestone[];
// }


export interface LinkProps {
  id: number;
  text: string;
  href: string;
  isExternal: boolean;
}

export interface ImageProps {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string;
}

export interface LogoProps {
  logoText: string;
  image: ImageProps;
}



export interface ArticleProps {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  image: ImageProps;
  author: string;
  featured: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}




type ComponentType = "blocks.hero-section" | "blocks.info-block"   | "blocks.milestones-block" | "blocks.vertical-accordion-block" | "blocks.services-accordion-block" | "blocks.logo-carousel-block" | "blocks.testimonials-block" | "blocks.features-block" | "blocks.featured-article";

interface Base<
  T extends ComponentType,
  D extends object = Record<string, unknown>
> {
  id: number;
  __component?: T;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  data?: D;
}

export type Block = HeroSectionProps | InfoBlockProps | MilestonesBlockProps | VerticalAccordionBlockProps | ServicesAccordionBlockProps | LogoCarouselBlockProps | TestimonialsBlockProps | FeaturesBlockProps | FeaturedArticleProps;

export interface HeroSectionProps extends Base<"blocks.hero-section"> {
  theme: "black" | "blue";
  heading: string;
  image: ImageProps;
  cta?: LinkProps;
  logo?: LogoProps;
  author?: string;
  darken?: boolean;
}

export interface InfoBlockProps extends Base<"blocks.info-block"> {
  theme: "black" | "red";
  reversed?: boolean;
  headline: string;
  content: string;
  image: ImageProps;
  cta?: LinkProps;
}



// ✅ Milestone structure
export interface Milestone {
  id: number;
  label: string;
  value: number;
}

export interface MilestonesBlockProps extends Base<"blocks.milestones-block"> {
  title: string;
  description: string;
  heading: string;
  milestones: Milestone[];
}

export interface FooterProps {
  logo: LogoProps;
  description: string;
  copyrightText:string;
  newsletterTitle:string;
  newsletterInputPlaceholder:string;
  newsletterButtonLabel:string;

  column: {
    title: string;
    link: LinkProps[];
  }[];
  socialLink: LinkProps[];
  bottomLink: LinkProps[];
}


export interface AccordionItem {
  id?: string; // for anchor linking
  title: string;
  description: string;
  cta?: LinkProps;
}

export interface VerticalAccordionBlockProps extends Base<"blocks.vertical-accordion-block"> {
  title?: string;
  items: AccordionItem[];
}


export interface ServiceAccordionItem {
  id: number;
  title: string;
  description: string;
}

export interface ServicesAccordionBlockProps {
  __component: "blocks.services-accordion-block";
  id: number;
  heading:string;
  items: ServiceAccordionItem[];
}





export interface LogoCarouselItem {
  image: {
    url: string;
    alternativeText?: string;
  };
}

export interface LogoCarouselBlockProps extends Base<"blocks.logo-carousel-block"> {
  items: LogoCarouselItem[];
}



export interface TestimonialItem {
  id: number;
  name: string;
  position: string;
  quote: string;
  image: {
    url: string;
    alternativeText?: string;
  };
}

export interface TestimonialsBlockProps {
  __component: "blocks.testimonials-block";
  id: number;
  heading?: string;
  items: TestimonialItem[];
}

export interface FeaturesBlockProps {
  __component: "blocks.features-block";
  id: number;
  heading: string;
  description: string;
  cta?: {
    text: string;
    href: string;
    isExternal: boolean;
  };
}

export interface FeaturedArticleProps extends Base<"blocks.featured-article"> {
  headline: string;
  excerpt: string;
  link: LinkProps;
  image: ImageProps;
}


