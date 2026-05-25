// Simple 404 handler for unknown routes
export const notFound = (req, res, next) => {
  res.status(404).json({ message: "Route not found" });
};
