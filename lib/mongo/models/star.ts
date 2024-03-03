import { IStar } from "@/utils/interfaces";
import { Schema, model, models } from "mongoose";

const starSchema = new Schema<IStar>();

const MStar = models.Star || model<IStar>("Star", starSchema);

export default MStar;
