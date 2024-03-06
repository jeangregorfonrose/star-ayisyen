import type { NextApiRequest, NextApiResponse } from "next";
import connectDb from "@/lib/mongo/dbConnect";
import MStar from "@/lib/mongo/models/star";

connectDb();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  const test = await MStar.create(req.body);

  if (test.err) {
    console.log(test.err.message);
    res.status(500).json(test.err.message);
  }

  res.status(200).json(test);
}
