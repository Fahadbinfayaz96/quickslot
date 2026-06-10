import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    venueId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Venue",
      required: true,
    },

    bookingDate: {
      type: String,
      required: true,
    },

    slotTime: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

bookingSchema.index(
  {
    venueId: 1,
    bookingDate: 1,
    slotTime: 1,
  },
  {
    unique: true,
  },
);

export default mongoose.model("Booking", bookingSchema);
