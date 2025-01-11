import mongoose, { Schema, model } from "mongoose";

export interface UserDocument {
  _id: string;
  epf: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  admin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<UserDocument>(
  {
    epf: {
      type: String,
      unique: true,
      required: [true, "EPF number is required"],
      match: [/^\d{4}$/, "EPF number must be a 4 digit number"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models?.User || model<UserDocument>("User", UserSchema);
export default User;
