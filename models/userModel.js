import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      typeof: String,
    },
  },
  { timestamp: true }
);

const userModel = mongoose.models.users || mongoose.model("users", userSchema);
export default userModel;
