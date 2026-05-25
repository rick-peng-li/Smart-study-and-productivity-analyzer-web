import mockDashboard from "../data/mockDashboard.js";

// Controller for GET /api/dashboard
export const getDashboardData = async (req, res, next) => {
  try {
    // In a real app, this would fetch from the database.
    // For now we return the temporary mock dashboard data.
    res.json({
      message: "Dashboard data retrieved successfully",
      data: mockDashboard,
    });
  } catch (err) {
    next(err);
  }
};
