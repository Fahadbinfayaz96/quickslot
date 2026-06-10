import Venue from "../models/Venue.js";
import Booking from "../models/Booking.js";
import { generateSlots } from "../constants/slots.js";

export const getVenues = async (req, res) => {
  try {
    const venues = await Venue.find();

    return res.status(200).json(venues);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch venues",
    });
  }
};

export const getVenueSlots = async (req, res) => {
  try {
    const { id } = req.params;
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({
        message: "Date is required",
      });
    }

    const bookings = await Booking.find({
      venueId: id,
      bookingDate: date,
    });

    const bookedSlots = bookings.map((booking) => booking.slotTime);

    const slots = generateSlots().map((time) => ({
      time,
      available: !bookedSlots.includes(time),
    }));

    return res.status(200).json(slots);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch slots",
    });
  }
};
