import type { NextApiRequest, NextApiResponse } from "next";
import connectDb from "@/lib/mongo/dbConnect";
import MStar from "@/lib/mongo/models/star";
import { IResponse } from "@/utils/interfaces";

connectDb();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {

    // Get the query nad method of the request
    const { method, query } = req;

    // Only process for a GET request
    if (method === "GET") { 
      try {
        // clean the query passed
        const term = String(query.query).toLowerCase().trim();

        // Find the stars that matched the term passed
        const stars = await MStar.find({
          starName: { $regex: `^${term}`},
        });

        // construct response  to send back to client
        const response = {
          success: true,
          data: stars
        };
      
        /** Send back the response with status code and data */
        return res.status(200).json(response);

      } catch (error) {
        console.log(`Error processing API request : ${error}`);

        // construct response  to send back to client
        const response = {
          success: true,
          msg: "Error processing API request"
        };

        /** Return an error message along with the HTTP status code*/
        return res.status(500).send(response);
      }
    }  
    // Any other HTTP Method is  not supported
    else {
      return res.status(405).end();
    }
};