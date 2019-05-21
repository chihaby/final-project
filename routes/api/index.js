const router = require("express").Router();
const driverRoutes = require("./drivers");
const riderRoutes = require("./riders");

router.use("/drivers", driverRoutes);
router.use("/riders", riderRoutes);

module.exports = router;
