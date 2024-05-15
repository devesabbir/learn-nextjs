import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    hotelId: {
      required: true,
      type: ObjectId,
    },
    userId: {
      required: true,
      type: ObjectId,
    },
    review: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true }
);

const reviewModel =
  mongoose.models.reviews || mongoose.model("reviews", reviewSchema);

export default reviewModel;
