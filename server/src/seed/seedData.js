import Venue from "../models/Venue.js";

const venues = [
  {
    name: "Elite Badminton Arena",
    sportType: "Badminton",
    location: "Downtown",
  },
  {
    name: "Champion Courts",
    sportType: "Badminton",
    location: "City Center",
  },
  {
    name: "Quick Turf Ground",
    sportType: "Football",
    location: "North Side",
  },
  {
    name: "Pro Sports Hub",
    sportType: "Football",
    location: "South Side",
  },
];

const seedData = async () => {
  const count = await Venue.countDocuments();

  if (count > 0) {
    return;
  }

  await Venue.insertMany(venues);

  console.log("✅ Venues seeded");
};

export default seedData;
