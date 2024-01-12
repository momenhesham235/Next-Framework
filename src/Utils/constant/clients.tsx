import {
  clientImageFive,
  clientImageFour,
  clientImageOne,
  clientImageThree,
  clientImageTwo,
} from "@/Utils/constant/imageSrc";
import { IClient } from "@/Utils/types/interface";

// src\pages\index.tsx
// client array render
export const clients: IClient[] = [
  {
    imageUrl: clientImageOne,
    alt: "company-1",
  },
  {
    imageUrl: clientImageTwo,
    alt: "company-2",
  },
  {
    imageUrl: clientImageThree,
    alt: "company-3",
  },
  {
    imageUrl: clientImageFour,
    alt: "company-4",
  },
  {
    imageUrl: clientImageFive,
    alt: "company-5",
  },
];
