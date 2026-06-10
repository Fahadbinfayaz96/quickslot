import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  createBooking,
  cancelBooking,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", authMiddleware, createBooking);

router.delete("/:id", authMiddleware, cancelBooking);

export default router;
