import express from "express";
import cors from "cors";

import venueRoutes from "./src/routes/venueRoute.js";
import bookingRoutes from "./src/routes/bookingRoute.js";
import userRoutes from "./src/routes/userRoute.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/venues", venueRoutes);

app.use("/bookings", bookingRoutes);

app.use("/users", userRoutes);

export default app;
