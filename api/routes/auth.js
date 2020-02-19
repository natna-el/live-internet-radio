// User Authentication Route //

const router = require("express").Router();

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
});
