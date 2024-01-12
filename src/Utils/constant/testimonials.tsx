import { ITestimonial } from "@/Utils/types/interface";
import { testimonialImageOne, testimonialImageThree, testimonialImageTwo } from "./imageSrc";
export const testimonials: ITestimonial[] = [
  {
    imageUrl: testimonialImageOne,
    name: "ahmed taha",
    role: "team leader",
    review:
      "CRM dashboard boosted our engineering team's productivity and efficiency. Highly recommended!",
  },
  {
    imageUrl: testimonialImageTwo,
    name: "Abdellah massoudi",
    role: "startup founder",
    review:
      "Game-changer for our engineering team, revolutionizing project management and collaboration.",
  },
  {
    imageUrl: testimonialImageThree,
    name: "omar fahed",
    role: "team member",
    review:
      "Simplified project management, improved communication, and empowered decision-making. Highly endorsed!",
  },
];
