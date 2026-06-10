import dotenv from "dotenv";

import app from "./app.js";
import connectDb from "./src/config/db.js";
import seedData from "./src/seed/seedData.js";

dotenv.config({
  path: "./server/.env",
});

const PORT = process.env.PORT || 3000;

await connectDb();

await seedData();

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
