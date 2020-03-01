const express = require("express");
const morgan = require("morgan");
const passport = require("passport");
const compression = require("compression");

// init express
const app = express();

// connect mongoose
require("./api/config/mongoose");

// import passport
require("./api/config/passport")(passport);

// MIDDLEWARES //
// morgan
app.use(morgan("dev"));

// compress all responses
app.use(compression());

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import routes
const auth = require("./api/routes/auth");
const stream = require("./api/routes/stream");

app.use("/auth", auth);
app.use("/stream", stream);

// ERRORS HANDLING
app.use((req, res, next) => {
  const error = new Error("not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
