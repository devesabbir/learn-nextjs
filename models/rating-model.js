import mongoose from "mongoose";

const ratingSchema = mongoose.Schema(
  {
    hotelId: {
      required: true,
      type: ObjectId,
    },
    userId: {
      required: true,
      type: ObjectId,
    },
    rating: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true }
);

const ratingModel =
  mongoose.models.ratings || mongoose.model("ratings", ratingSchema);

export default ratingModel;
