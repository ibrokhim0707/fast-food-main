const { User } = require("../models/user.model");
const { generateToken } = require("../utils/jwt");

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = generateToken({ userId: user.id });
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

exports.register = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, name });
    const token = generateToken({ userId: user.id });
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};
