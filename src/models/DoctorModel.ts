import { ReviewModel } from "./ReviewModel";

export type DoctorModel = {
  fullName: string;
  title: string;
  imageUrl: string;
  about: string;
  isOnline: boolean;
  rating: number;
  reviews?: ReviewModel[];
  skills?: string[];
  time?: string;
  profile?: string;
  date?: string;
  hourly?: number;
  points?: number;
  verified?: boolean;
};
