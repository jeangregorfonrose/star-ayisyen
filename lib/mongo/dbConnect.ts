import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connection = {
    isConnected: 0
};

async function connectDb() {
  if (connection.isConnected) {
    // Use existing database connection
    console.log("Using existing connection");
    return;
  }

  // Use new database connection
  if(MONGODB_URI) {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("DB Connected");
    connection.isConnected = db.connections[0].readyState;
  }
}

export default connectDb;