import type { NextApiRequest, NextApiResponse } from "next";
import connectDb from "@/lib/mongo/dbConnect";
import MAdmin from "@/lib/mongo/models/adminUser";

connectDb();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { username, password } = req.body;

  try {
    const user = await MAdmin.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    
    const isMatch = user.password === password;

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Here you can generate a JWT token and send it back to the client for authentication
    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
}
