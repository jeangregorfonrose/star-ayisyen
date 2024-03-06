import { IStar } from "@/utils/interfaces";
import { Schema, model, models } from "mongoose";

const starSchema = new Schema<IStar>({
  fname: String,
  lname: String,
  starName: String,
  otherNames: [String],
  occupations: [String],
  birthDate: Date,
  birthPlace: {
    country: String,
    department: String,
    city: String,
  },
  deathDate: Date,
  imageUrl: String,
  bio: String,
  awards: [
    {
      title: String,
      date: Date,
    },
  ],
  socials: [
    {
      app: String,
      link: String,
    },
  ],
  createdDate: Date,
  updatedDate: Date,
});

const MStar = models.Star || model<IStar>("Star", starSchema);

export default MStar;
