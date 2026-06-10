import dotenv from "dotenv";

import app from "./app.js";
import connectDb from "./src/config/db.js";
import seedData from "./src/seed/seedData.js";

dotenv.config({
  path: "./server/.env",
});

console.log(`what is this................... ${process.env.MONGO_URI}`);
const PORT = process.env.PORT || 5000;

await connectDb();

await seedData();

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
