const authorizeMiddleware = (requiredRole) => {
  return (req, res, next) => {
    const roles = req.user.role.name;
    const hasRequiredRole = requiredRole.some((role) => role.includes(roles));
    if (!hasRequiredRole) {
      return res
        .status(403)
        .json({ error: "You don't have permission to access" });
    }
    next();
  };
};

module.exports = authorizeMiddleware;
