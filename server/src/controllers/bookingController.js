import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    const { venueId, bookingDate, slotTime } = req.body;

    if (!venueId || !bookingDate || !slotTime) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const booking = await Booking.create({
      userId: req.user.id,
      venueId,
      bookingDate,
      slotTime,
    });

    return res.status(201).json(booking);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "Slot already booked",
      });
    }

    return res.status(500).json({
      message: "Failed to create booking",
    });
  }
};

export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      userId: req.params.id,
    }).populate("venueId");

    return res.status(200).json(bookings);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch bookings",
    });
  }
};

export const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    return res.status(200).json({
      message: "Booking cancelled",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to cancel booking",
    });
  }
};
