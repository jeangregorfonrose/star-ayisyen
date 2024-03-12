import { Schema, model, models } from "mongoose";
import { IUser } from "@/utils/interfaces";

const adminSchema = new Schema<IUser>({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

const MAdmin = models.Star || model<IUser>("Star", adminSchema);

export default MAdmin;
