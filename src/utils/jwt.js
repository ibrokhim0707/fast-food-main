const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config/index");

exports.generateToken = (payload) => {
  return jwt.sign(payload, jwtSecret, { expiresIn: "1d" });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, jwtSecret);
};
