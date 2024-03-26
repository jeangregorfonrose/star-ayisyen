import { Schema, model, models } from "mongoose";
import { IUser } from "@/utils/interfaces";

const adminSchema = new Schema<IUser>({
    username: {type: String, required: true, unique: true, index: true},
    password: {type: String, required: true}
}, {
    autoCreate: true
});

const MAdmin = models.Admin || model<IUser>("Admin", adminSchema);

export default MAdmin;
