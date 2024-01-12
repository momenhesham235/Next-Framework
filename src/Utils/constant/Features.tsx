import { IFeature, featureBlock } from "@/Utils/types/interface";
import {
  featureBlockImageOne,
  featureBlockImageTwo,
  featureImageOne,
  featureImageThree,
  featureImageTwo,
} from "@/Utils/constant/imageSrc";

export const features: IFeature[] = [
  {
    imageUrl: featureImageOne,
    title: "Reporting dashboard",
    content:
      "Generate insightful reports and analytics with our reporting dashboard feature, empowering data-driven decision-making for engineering teams.",
  },
  {
    imageUrl: featureImageTwo,
    title: "Meeting scheduling",
    content:
      "Effortlessly schedule meetings, coordinate availability, and send automated reminders with the meeting scheduling feature, ensuring seamless collaboration.",
  },
  {
    imageUrl: featureImageThree,
    title: "100% secured",
    content:
      "Enhance data protection with robust security features, ensuring confidentiality, integrity, and compliance for your engineering team's CRM dashboard.",
  },
];

export const featuresBlock: featureBlock[] = [
  {
    imageUrl: featureBlockImageOne,
    title: "Integrated Messaging System",
    content:
      "The integrated messaging system within the CRM dashboard for engineering teams allows for instant and seamless communication among team members. It eliminates the need for external messaging platforms, keeping all project-related conversations organized and easily accessible within the dashboard's interface.",
  },
  {
    imageUrl: featureBlockImageTwo,
    title: "Resource Allocation and Task Management",
    content:
      "The task management system within the CRM dashboard for engineering teams enables efficient tracking and assignment of tasks. It provides a centralized platform to create, prioritize, and monitor tasks, ensuring streamlined project execution and improved collaboration among team members.",
    isReversed: true,
  },
];
