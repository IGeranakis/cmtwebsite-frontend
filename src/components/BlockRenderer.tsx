import type { Block } from "@/types";

import { HeroSection } from "@/components/blocks/HeroSection";
import { InfoBlock } from "@/components/blocks/InfoBlock";
import {MilestoneBlock} from "@/components/blocks/MilestoneBlock";
import {VerticalAccordionBlock} from "@/components/blocks/VerticalAccordionBlock";
import {ServicesAccordionBlock} from "@/components/blocks/ServicesAccordionBlock";
import {LogoCarouselBlock} from "@/components/blocks/LogoCarouselBlock";
import { TestimonialsBlock } from "@/components/blocks/TestimonialsBlock";
import { FeaturesBlock } from "@/components/blocks/FeatureBlocks";
import { FeaturedArticle } from "@/components/blocks/FeaturedArticle";

function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case "blocks.hero-section":
      return <HeroSection {...block} key={index} />;
    case "blocks.info-block":
      return <InfoBlock {...block} key={index} />;
    case "blocks.milestones-block":
      return <MilestoneBlock {...block} key={index} />;
    case "blocks.vertical-accordion-block":
       return <VerticalAccordionBlock {...block} key={index} />;
    case "blocks.services-accordion-block":
       return <ServicesAccordionBlock {...block} key={index}  />;
    case "blocks.logo-carousel-block":
       return <LogoCarouselBlock  {...block} key={index}  />;
    case "blocks.testimonials-block":
        return <TestimonialsBlock {...block} key={index} />;
    case "blocks.features-block" :
        return <FeaturesBlock {...block} key={index} />;
    case "blocks.featured-article":
        return <FeaturedArticle {...block} key={index}/>

    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => blockRenderer(block, index));
}