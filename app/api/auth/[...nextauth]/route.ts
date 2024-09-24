// @ts-nocheck

import { ConnectDB } from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                username: {},
                password: {}
            },
            async authorize(credentials) {
                const { email, password } = credentials
                if (!email || !password) return null

                const db = await ConnectDB();
                const currentUser = await db.collection("users").findOne({ email });
                if (!currentUser) return null

                const isPasswordCorrect = await bcrypt.compareSync(password, currentUser.password);
                if (!isPasswordCorrect) return null

                return currentUser
            }
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!
        }),
        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET!
        })
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async signIn({ user, account }) {
            // console.log(user, account);
            if (account?.provider === "google" || account?.provider === "github") {
                // const { name, email, image } = user;
                const { email } = user;
                try {
                    const db = await ConnectDB();
                    const userCollection = db.collection("users");
                    const userExist = await userCollection.findOne({ email });
                    if (!userExist) {
                        // const res = await userCollection.insertOne({ ...user, provider: account?.provider });
                        await userCollection.insertOne({ ...user, provider: account?.provider });
                        return user
                    } else {
                        return user
                    }
                } catch (err) {
                    console.log(err);
                }
            }
            else {
                return user;
            }
        },
    }
});

export { handler as GET, handler as POST };