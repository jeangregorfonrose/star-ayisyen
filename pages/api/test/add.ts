import type { NextApiRequest, NextApiResponse } from "next";
import connectDb from "@/lib/mongo/dbConnect";
import Test from "@/lib/mongo/testModel";

connectDb();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Connecting to Mongo");
  console.log("connected");
  console.log(req.body);

  const test = await Test.create(req.body);

  if (test.err) {
    console.log(test.err.message);
    res.status(500).json(test.err.message);
  }

  res.status(200).json(test);
}
