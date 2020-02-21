const mongoose = require("mongoose");

module.exports = mongoose
  .connect(process.env.mongouri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.log(`> MongoDB has been connected!`))
  .catch(err => {
    throw err;
  });
