import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    admin: boolean;
  }

  interface Session {
    user: {
      id: string;
      admin: boolean;
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string;
    admin: boolean;
  }
}
