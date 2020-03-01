const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// require validator
const { validateLoginInput } = require("../../validator/auth");

// user model
const User = require("../../models/user");

module.exports = (req, res, next) => {
  // validate sign up form
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { username, password } = req.body;

  User.findOne({ username }).then(user => {
    // check if user exist
    if (!user) {
      errors.username = "user not found";
      res.status(404).json(errors);
    }

    // check if the password is correct
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // username & password is correct,
        // sign jwt token...
        let payload = { id: user.id, username: user.username }; // jwt payload

        jwt.sign(payload, process.env.jwtSecret, (err, token) => {
          res.json({ success: true, token: "Bearer " + token });
        });
      } else {
        errors.password = "incorrect password";
        return res.status(403).json(errors);
      }
    });
  });
};
