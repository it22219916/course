import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import type { NextAuthOptions } from "next-auth";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        epf: { label: "EPFNo", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({
          epf: credentials?.epf,
        }).select("+password");

        if (!user) throw new Error("Wrong EPF Number");

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!passwordMatch) throw new Error("Wrong Password");

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email, // Optional, add if needed
          admin: user.admin, // Assuming `admin` is a property on the user schema
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Add user properties to the token
        token.id = user.id;
        token.admin = user.admin;
      }
      return token;
    },
    async session({ session, token }) {
      // Add token properties to the session
      session.user = {
        ...session.user,
        id: token.id,
        admin: token.admin,
      };
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
};
