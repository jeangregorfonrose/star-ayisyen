/**
 * This file contains all the types used by the application.
 */

/**
 * The type for social apps
 */
export type socialApp = "Instagram" | "Facebook" | "Tiktok" | "LinkedIn" | "Snapchat" | "Discord" | "X(Twitter)";

/**
 * The type for a user's social profile information.
 */
export type social = {
    app: socialApp,
    link: string,
};

/**
 * Awards that a star may have nominated for
 */
export type awards = {
  date: Date;
  title: string;
};
