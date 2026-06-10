import { USERS } from "../constants/users.js";

export const getUsers = (req, res) => {
  try {
    res.status(200).json(USERS);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
