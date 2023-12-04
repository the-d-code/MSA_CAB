const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ error: "Access denied" });
  }
  try {
    const decodeToken = jwt.decode(token.replace("Bearer ", ""));
    req.user = {
      userId: decodeToken.userId,
      username: decodeToken.username,
      role: decodeToken.role,
    };
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
};

module.exports = authMiddleware;
