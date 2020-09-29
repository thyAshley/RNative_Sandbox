const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({
      email,
      password,
    });
    await user.save();
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.send({ token });
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(422)
      .send({ error: "Must provide both an email and password" });

  const user = await User.findOne({ email });
  if (!user) return res.status(404).send({ error: "account not found" });

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.status(200).send({ token });
  } catch (err) {
    console.error(err);
    res.status(422).send({ error: "error logging in" });
  }
};

exports.requireAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.send("You must be verified");
  }
  const token = authorization.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) return res.status(404).send({ error: "Something went wrong" });
    try {
      const user = await User.findById(payload.userId);
      req.user = user;
      next();
    } catch (error) {
      return res.status(404).send({ error: "Something went wrong" });
    }
  });
};
