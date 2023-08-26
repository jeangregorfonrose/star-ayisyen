import { Schema, model, models } from "mongoose";

const testSchema = new Schema({
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

const Test = models.Test || model("Test", testSchema);

export default Test;