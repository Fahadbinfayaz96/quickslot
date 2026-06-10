import { USERS } from "../constants/users.js";

export const getUsers = (req, res) => {
  res.status(200).json(USERS);
};
