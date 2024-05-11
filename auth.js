import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./service/mongoClient";
import CredentialsProvider from "next-auth/providers/credentials";
import userModel from "./models/user-model";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: process.env.DATABASE_NAME,
  }),
  providers: [
    FacebookProvider({
      clientId: process.env.AUTH_FACEBOOK_ID,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        // logic to salt and hash password
        //  const pwHash = saltAndHashPassword(credentials.password)
        try {
          // logic to verify if user exists
          user = await userModel.findOne({ email: credentials.email });

          if (!user) {
            // No user found, so this is their first attempt to login
            // meaning this is also the place you could do registration
            throw new Error("User not found.");
          }

          if (user) {
            const isMatch = user.password === credentials.password;

            if (isMatch) {
              // return user object with the their profile data

              return user;
            } else {
              throw new Error("Invalid credentials.");
            }
          }
        } catch (error) {
          throw new Error(error);
        }
        return user;
      },
    }),
  ],
});
