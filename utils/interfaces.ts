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
  starname: string;
  othernames: [string];
  ocupations: [string];
  birthdate: Date;
  birthplace: {
    country: string;
    department: string;
    city: string;
  };
  deathdate?: Date;
  imageurl?: string;
  bio: string;
  awards: [awards];
  socials: [social];
}
