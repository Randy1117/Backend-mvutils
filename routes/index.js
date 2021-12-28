const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes inicio
router.use("/api", apiRoutes);

module.exports = router;