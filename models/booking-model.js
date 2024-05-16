import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const bookingSchema = mongoose.Schema(
  {
    hotelId: {
      required: true,
      type: ObjectId,
    },
    userId: {
      required: true,
      type: ObjectId,
    },
    checkin: {
      required: true,
      type: String,
    },
    checkout: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

const bookingModel =
  mongoose.models.bookings || mongoose.model("bookings", bookingSchema);

export default bookingModel;
