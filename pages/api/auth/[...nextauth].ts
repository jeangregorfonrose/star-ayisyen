import connectDb from "@/lib/mongo/dbConnect";
import MAdmin from "@/lib/mongo/models/adminUser";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

connectDb();

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const body = req.body as { username: string; password: string };

        const { username, password } = body;

        const user = await MAdmin.findOne({ username });

        if (!user) throw new Error("No user found witht his username");

        const isMatch = user.password === password;

        if (!isMatch) throw new Error("Invalid username or password");

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
