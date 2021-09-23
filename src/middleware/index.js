const bcrypt = require("bcryptjs");
const { User } = require("../models");
const jwt = require("jsonwebtoken");

exports.testMiddle = (req, res, next) => {
  try {
    console.log(req.body);
    req.user = "Andy";
    next();
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.hashPassword = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 8);
    req.body.password = hashedPassword;
    next();
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.decryptPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user.password);
    const passwordsMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    console.log(passwordsMatch);
    if (passwordsMatch) {
      req.user = user;
      next();
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(501).send(error);
  }
};

exports.createToken = async (req, res, next)=>{
  try {
    const token = jwt.sign({email: req.body.email}, process.env.SECRET);
    req.token = token
    next();
  } catch (error) {
    res.status(501).send(error);
  }
};