const router = require("express").Router();
const ridersController = require("../../controllers/ridersController");

// Matches with "/api/riders"
router
    .route("/")
    .get(ridersController.findAll)
    .post(ridersController.create);

// Matches with "/api/riders/:id"
router
    .route("/:id")
    .get(ridersController.findById)
    .put(ridersController.update)
    .delete(ridersController.remove);

module.exports = router;
