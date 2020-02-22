const bcrypt = require("bcryptjs");

const { validateSignUpInput } = require("../../validator/auth"); // require validator
const User = require("../../models/user"); // user model

module.exports = (req, res, next) => {
  // validate sign up form
  const { errors, isValid } = validateSignUpInput(req.body);

  // check if the form is valid
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { username, password, confirm_password } = req.body;
  // create new user object
  const newUser = new User({
    username,
    password,
    confirm_password
  });

  // password hashing
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;

      // save new user to the database
      newUser
        .save()
        .then(user => res.json({ success: true, user }))
        .catch(err => {
          if (err.errors.username && err.errors.username.kind == "unique") {
            errors.username = "username has been already taken";
            res.status(403).json({ errors });
          } else {
            res.status(400).json(err);
          }
        });
    });
  });
};
