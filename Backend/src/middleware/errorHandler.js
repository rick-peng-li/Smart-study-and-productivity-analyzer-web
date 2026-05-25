// Centralized error handler. Use `next(err)` in controllers to trigger.
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  const status = err.status || 500;
  res.status(status).json({
    message: err.message || "Internal Server Error",
  });
};
