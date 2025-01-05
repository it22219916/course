"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const register = async (values: any) => {
  const { epf, email, password, name } = values;

  try {
    await connectDB();
    const epfFound = await User.findOne({ epf });
    const emailFound = await User.findOne({ email });
    if (epfFound || emailFound) {
      return {
        error: "Email or EPF already exists!",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      epf,
      name,
      email,
      password: hashedPassword,
    });
    const savedUser = await user.save();
  } catch (e) {
    console.log(e);
  }
};
