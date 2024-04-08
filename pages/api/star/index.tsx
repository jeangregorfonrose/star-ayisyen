import type { NextApiRequest, NextApiResponse } from "next";
import connectDb from "@/lib/mongo/dbConnect";
import MStar from "@/lib/mongo/models/star";
import { IResponse } from "@/utils/interfaces";

connectDb();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    switch(req.method){
        // case 'GET':
        //     try{
        //         const stars = await MStar.find({});
        //         return res.status(200).json(stars);
        //     }catch(err){
        //         console.log(err);
        //         return res.status(400).send('Error getting stars');
        //     }
        // Add a new star to the database
        case 'POST':
            // Response to return
            let response : IResponse = {
                success: false
            };

            if(!req.body) {
                response.message = "Missing Data";
                return res.status(400).send(response);
            }

            // get body
            let data = req.body;
            
            // check for required fields
            const missingFields = ["starName"].filter((field) => !data[field]);
            if (missingFields.length >  0) {
                
                return res.status(400).send(`Missing ${missingFields.join(", ")}.`);
            }

            // create and save a new Star instance
            const star = new MStar(data);
            try {
                await star.save();
                response.message = `Successfully added ${data.starName}`;
                response.success= true;
                response.data = star;
                return res.status(201).send(response);
            } catch (error) {
                response.message = "Server Error";
                return res.status(500).send(response);
            }
        // Update an existing star in the db
        /*
        case 'PUT':
            break;
        */
        
        // sDelete a star by its id
        // case 'DELETE':
        //     const id = req.query.id as string;
        //     if (!MStar.isValidId(id)) {
        //       return res.status(400).send('Invalid Star ID');
        //     }
    
        //     try {
        //       await MStar.deleteOne({_id: id});
        //       return res.status(200).send('Deleted the star');
        //     } catch (e) {
        //       console.error(e);
        //       return res.status(500).send('Server Error');
        //     }
      default:
          return res.status(405).send('Method not supported');
  }
};