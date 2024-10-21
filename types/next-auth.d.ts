import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    username: string;
    role: string;  // Add role property here
  }

  interface Session extends DefaultSession {
    user: {
      id: string;
      username: string;
      role: string;  // Add role property here
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string;
    role: string;  // Add role property here
  }
}
