import { Schema, model, models } from "mongoose";
import { IStarAuth } from "@/utils/interfaces";

const starAuthSchema = new Schema<IStarAuth>(
  {
    starId: { type: String, required: true, unique: true, index: true },
    starName: { type: String, required: true },
    passcode: { type: Number, required: true },
  },
  {
    autoCreate: true,
  }
);

const MStarAuth = models.StarAuth || model<IStarAuth>("StarAuth", starAuthSchema);

export default MStarAuth;
