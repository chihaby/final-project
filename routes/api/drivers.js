const router = require("express").Router();
const driversController = require("../../controllers/driversController");

// Matches with "/api/books"
router.route("/")
    .get(driversController.findAll)
    .post(driversController.create);

    // Matches with "/api/books/:id"
    router
    .route("/:id")
    .get(driversController.findById)
    .put(driversController.update)
    .delete(driversController.remove);

module.exports = router;
