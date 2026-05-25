// Sample controller showing simple structure
export const getSample = async (req, res, next) => {
  try {
    // Normally you'd fetch from DB or call services here
    res.json({ message: "Sample data from controller", data: { hello: "world" } });
  } catch (err) {
    next(err); // pass error to centralized handler
  }
};
