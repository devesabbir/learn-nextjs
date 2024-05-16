import mongoose from "mongoose";

const citySchema = mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
  },

  { timestamps: true }
);

const cityModel =
  mongoose.models.cities || mongoose.model("cities", citySchema);

export default cityModel;
