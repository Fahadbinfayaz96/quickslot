import { USERS } from "../constants/users.js";

const authMiddleware = (req, res, next) => {
  const userId = req.header("X-User-Id");

  if (!userId) {
    return res.status(401).json({
      message: "X-User-Id header required",
    });
  }

  const user = USERS.find((user) => user.id === userId);

  if (!user) {
    return res.status(401).json({
      message: "Invalid user",
    });
  }

  req.user = user;

  next();
};

export default authMiddleware;
