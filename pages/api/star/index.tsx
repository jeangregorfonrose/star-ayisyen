import type { NextApiRequest, NextApiResponse } from "next";
import connectDb from "@/lib/mongo/dbConnect";
import MStar from "@/lib/mongo/models/star";
import { IResponse } from "@/utils/interfaces";
import { generatePasscode } from "@/utils/helpers";
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

  switch (req.method) {
    case "GET": {
      if (!req.query.id) {
        response.message = "Missing Data";
        return res.status(400).send(response);
      }

      // get ID from request body
      const id = req.query.id as string;

      try {
        const star = await MStar.findById(id);

        // If no star found
        if (!star) {
          response.message = "No star found with this id"
        }

        response.data = star;
        response.success = true;
        return res.status(200).json(response);
      } catch (err) {
        response.message = "Error getting star";
        response.success = false;
        return res.status(400).send(response);
      }
    }
    case "POST": {
      if (!req.body) {
        response.message = "Missing Data";
        return res.status(400).send(response);
      }

      // get body
      let data = req.body;

      // check for required fields
      const missingFields = ["starName"].filter((field) => !data[field]);
      if (missingFields.length > 0) {
        return res.status(400).send(`Missing ${missingFields.join(", ")}.`);
      }

      // create and save a new Star instance
      const star = new MStar(data);
      try {
        const newStar = await star.save();

        if (newStar === star) {
          // Generate passcode to add starAuth document
          const genpasscode = generatePasscode();

          // Hash gen passcode
          const hashPasscode = await bcrypt.hashSync(genpasscode, 10);

          // Add passcode to the database
          const starAuth = new MStarAuth({
            starId: newStar._id,
            starName: newStar.starName,
            passcode: genpasscode,
          });
          
          const newStarAuth = await starAuth.save();

          if(newStarAuth == null || newStarAuth != starAuth){
            await MStar.deleteOne({_id : newStar._id});
            throw new Error("Save failed");
          }
          
          response.message = `Successfully added ${data.starName}`;
          response.success = true;
          response.data = star;
          return res.status(201).send(response);
        } else {
          throw new Error("Save failed");
        }
      } catch (error) {
        response.message = "Server Error";
        return res.status(500).send(response);
      }
    }
    case "PUT": {
      if (!req.body) {
        response.message = "Missing";
        return res.status(400).send(response);
      }

      // get body
      let data = req.body;

      // check for required fields
      const missingFields = ["starName"].filter((field) => !data[field]);
      if (missingFields.length > 0) {
        return res.status(400).send(`Missing ${missingFields.join(", ")}.`);
      }

      // Find and existing star and replace with new data
      try {
        const updatedStar = await MStar.findByIdAndUpdate(data._id, data);

        console.log(updatedStar);

        // verify by id
        if (data._id == updatedStar._id) {
          response.message = `Successfully updated ${updatedStar.starName}`;
          response.success = true;
          return res.status(200).send(response);
        } else {
          throw new Error("Updated failed");
        }
      } catch (error) {
        response.message = "Server Error";
        return res.status(500).send(response);
      }
    }
    case "DELETE": {
      if (!req.query.id) {
        response.message = "Missing Data";
        return res.status(400).send(response);
      }

      // get ID from request body
      const id = req.query.id as string;

      try {
        // Find by ID and delete
        const deletedStar = await MStar.findByIdAndDelete(id);
        response.success = true;
        response.message = "Record deleted successfully!";
        response.data = deletedStar.toJSON();
        return res.status(200).send(response);
      } catch (err) {
        response.message = "Error deleting  record.";
        response.success = false;
        console.log(err);
        return res.status(400).send(response);
      }
    }
    default:
      return res.status(405).send("Method not supported");
  }
}
