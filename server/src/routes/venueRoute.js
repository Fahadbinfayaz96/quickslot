import express from "express";

import { getVenues, getVenueSlots } from "../controllers/venueController.js";

const router = express.Router();

router.get("/", getVenues);

router.get("/:id/slots", getVenueSlots);

export default router;
