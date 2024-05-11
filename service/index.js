import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI;
const cached = {};
async function connectMongoDB() {
  if (!MONGO_URI) {
    throw new Error(
      "Please define the MONGO_URI environment variable inside environment variable"
    );
  }
  if (cached.connection) {
    return cached.connection;
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI);
  }
  try {
    cached.connection = await cached.promise;
    console.log("Database connection established!");
  } catch (e) {
    cached.promise = undefined;
    throw e;
  }

  return cached.connection;
}
export default connectMongoDB;
