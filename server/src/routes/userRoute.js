import express from "express";
import { getUsers } from "../controllers/userController.js";
import { getUserBookings } from "../controllers/bookingController.js";

const router = express.Router();

router.get("/", getUsers);

router.get("/:id/bookings", getUserBookings);

export default router;
