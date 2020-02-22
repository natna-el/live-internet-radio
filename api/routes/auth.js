// USER AUTH ROUTE //

const router = require("express").Router();
const passport = require("passport");

const signup = require("../controllers/auth/signup"); // SIGN UP CONTROLLER
const login = require("../controllers/auth/login"); // LOG IN CONTROLLER
const current = require("../controllers/auth/current"); // CURRENT SESSION CONTROLLER

// @route       POST /auth/signup
// @desc        register new user
// @access      public
router.post("/signup", signup);

// @route       POST /auth/login
// @desc        login user
// @access      public
router.post("/login", login);

// @route       GET api/auth/current
// @desc        return authorized user
// @access      private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  current
);

module.exports = router;
