import mongoose from "mongoose";

const venueSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    sportType: {
      type: String,
      required: true,
    },

    location: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Venue", venueSchema);
