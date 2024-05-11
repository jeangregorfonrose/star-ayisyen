import type { NextApiRequest, NextApiResponse } from "next";
import connectDb from "@/lib/mongo/dbConnect";
import MStar from "@/lib/mongo/models/star";
import { IResponse, IStarAuth } from "@/utils/interfaces";
import MStarAuth from "@/lib/mongo/models/starAuth";
import bcrypt from "bcrypt";

connectDb();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Response to return
  let response: IResponse = {
    success: false,
  };

  // Make sure request is port method
  if (req.method != "POST") {
    response.message = "Invalid HTTP Method";
    return res.status(405).json(response);
  }

  // Check for data
  if (!req.body) {
    response.message = "No Data Provided";
    return res.status(400).json(response);
  }

  const { starId, passcode } = req.body;

  console.log(req.body);

  try {
    // Verify passcode
    const authDoc : IStarAuth | null = await MStarAuth.findOne({ starId: starId });

    // !(await bcrypt.compare(passcode, authDoc.passcode))

    if (!authDoc || passcode != authDoc.passcode) {
      throw new Error("Incorrect Passcode");
    }

    // Get the user's profile
    const starProfile = await MStar.findById(starId);

    // Return the profile with a successful status
    response.success = true;
    response.data = starProfile;
    return res.status(200).json(response);
  } catch (err: any) {
    console.error(err);
    response.message = err.message;
    return res.status(500).json(response);
  }
}
