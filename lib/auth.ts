import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import { db } from "./db";
import { compare } from "bcrypt";
export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session:{
        strategy:'jwt'
    },
    pages:{
        signIn:'/sign-in'
    },
    providers: [
        CredentialsProvider({
          name: 'Credentials',
        
          credentials: {
            email: { label: "Email", type: "email", placeholder: "" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, ) {
           if(!credentials?.email || !credentials?.password){
            return null
           }
           const existingUser=await db.user.findUnique({
            where:{email: credentials?.email},
            select: { // Ensure to select the role here
              id: true,
              username: true,
              email: true,
              role: true, // Make sure to include role
              password: true
          },
           });

           console.log("Fetched user:", existingUser); // Log fetched user
           if(!existingUser){
            return null;
           }

           const passwordMatch=await compare(credentials.password, existingUser.password)
           if (!passwordMatch){
            return null;
           }

           return{
            id: existingUser.id + '',
            username: existingUser.username,
            email: existingUser.email,
            role: existingUser.role
           }
          }
        })
      ],
      callbacks: {
        async jwt({ token, user }) {
          console.log("User during JWT callback:", user); // Log the user
          if (user) {
              token.id = user.id;
              token.role = user.role;  // Add role to the token
          }
          return token;
      },
      async session({ session, token }) {
        console.log("Token during session callback:", token); // Log the token
        if (token) {
            session.user.id = token.id as string;
            session.user.role = token.role as string;  // Ensure the session has the role
        }
        return session;
    },
    },
  }