// RADIO STREAM ROUTE //

const router = require("express").Router();

router.use("/", (req, res, next) => {
  res.send("streaming route");
});

module.exports = router;
