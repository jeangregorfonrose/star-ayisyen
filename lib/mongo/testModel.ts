import { Schema, model, models } from "mongoose";

const starSchema = new Schema({
  fname: String,
  lname: String,
  popularnname: String,
  othernames: [String],
  occupations: [String],
  birthdate: Date,
  birthplace: {
    country: String,
    department: String,
    city: String,
  },
  bio: String,
  awards: [{date: Date, titles: [String]}],
  socials: [String],
  profileimg: String
});

const Star = models.Test || model("Star", starSchema);

export default Star;