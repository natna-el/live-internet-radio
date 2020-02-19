const validator = require("validator").default;
const isEmpty = require("./isEmpty");

module.exports = {
  validateSignUpInput: data => {
    let errors = {};

    data.username = !isEmpty(data.username) ? data.username : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.confirm_password = !isEmpty(data.confirm_password)
      ? data.confirm_password
      : "";

    !validator.isLength(data.username, { min: 4, max: 12 }) &&
      (errors.username = "username characters length should be between 4 & 12");

    validator.isEmpty(data.username) &&
      (errors.username = "username field is required!");

    !validator.isLength(data.password, { min: 4, max: 30 }) &&
      (errors.password = "minimum of 4 digit password is required!");

    validator.isEmpty(data.password) &&
      (errors.password = "password field is required!");

    validator.isEmpty(data.confirm_password)
      ? (errors.confirm_password = "confirm password field is required!")
      : !validator.equals(data.password, data.confirm_password) &&
        (errors.confirm_password = "password fields must match");

    return {
      errors,
      isValid: isEmpty(errors)
    };
  },

  validateLoginInput: data => {
    let errors = {};

    data.username = !isEmpty(data.username) ? data.username : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    validator.isEmpty(data.email) &&
      (errors.email = "Email or Username field is required");

    validator.isEmpty(data.password) &&
      (errors.password = "Password field is required");

    return {
      errors,
      isValid: isEmpty(errors)
    };
  }
};
