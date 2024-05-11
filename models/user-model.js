import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    image: {
      required: false,
      type: String,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.models.users || mongoose.model("users", userSchema);

export default userModel;
