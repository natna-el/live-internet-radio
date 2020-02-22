// RADIO STREAM ROUTE //

const router = require("express").Router();
const protectedRoute = require("../middleware/protected-route");

// controllers
const createNew = require("../controllers/stream/createNew");

// @route       POST stream/new
// @desc        create new radio stream
// @access      private
router.post("/new", protectedRoute, createNew);

module.exports = router;
