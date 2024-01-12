// src\components\Heading.tsx
export interface IHeadingProps {
  title: string;
  isCentered?: boolean;
}
// src\Utils\constant\clients.tsx
export interface IClient {
  imageUrl: string;
  alt: string;
}
// src\Utils\constant\imageSrc.tsx
export interface IFeature {
  imageUrl: string;
  title: string;
  content: string;
}
// src\Utils\constant\Features.tsx
export interface featureBlock extends IFeature {
  isReversed?: boolean;
}

export interface IPricing {
  title: string;
  description: string;
  monthlyPrice: number;
  annuallyPrice: number;
  features: string[];
  isMostPopular?: boolean;
  glowPosition?: "right" | "left";
}

export type IPricingMode = "monthly" | "annually";


export interface ITestimonial {
  imageUrl: string;
  name: string;
  role: string;
  review: string;
}

export interface IFooterColumn {
  title: string;
  links: string[];
}
