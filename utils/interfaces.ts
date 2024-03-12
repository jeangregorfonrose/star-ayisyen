/**
 * This files contains all the interfaces used  by the application.
 */
import { awards, social } from "./types";

/**
 * Defines the properties of a star in the system.
 */
export interface IStar {
  fname: string;
  lname: string;
  starName: string;
  otherNames: [string];
  occupations: [string];
  birthDate: Date;
  birthPlace: {
    country: string;
    department: string;
    city: string;
  };
  deathDate?: Date;
  imageUrl?: string;
  bio: string;
  awards: [awards];
  socials: [social];
  createdDate: Date;
  updatedDate: Date;
}

/**
 * Defines the structure of the  response when getting stars data from the API.
 */
export interface IResponse {
  success: boolean;
  data?: IStar[];
  msg?: string;
}
