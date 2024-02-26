import type { NextApiRequest, NextApiResponse } from "next";
import connectDb from "@/lib/mongo/dbConnect";
import Star from "@/lib/mongo/testModel";

connectDb();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const test = await Star.create(req.body);

  if (test.err) {
    console.log(test.err.message);
    res.status(500).json(test.err.message);
  }

  res.status(200).json(test);
}
