import type { NextApiRequest, NextApiResponse } from "next";
import connectDb from "@/lib/mongo/dbConnect";
import MStar from "@/lib/mongo/models/star";
import { IStar } from "@/utils/interfaces";

connectDb();

interface Data {
    success: boolean;
    data?: IStar[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    try {
        const stars = await  MStar.find();
        if (!stars) throw new Error("No Stars Found");
        return res.status(200).json({ success: true, data: stars });
      } catch (error) {
          console.log(`Error in getting all stars : ${error}`);
          return res.status(400).json({
            success: false,
          })
      }
}