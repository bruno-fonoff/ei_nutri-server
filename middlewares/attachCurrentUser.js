const UserModel = require("../models/User.model");

async function attachCurrentUser(req, res, next) {
  try {
    const loggedInUser = req.auth;
    console.log(loggedInUser);

    const user = await UserModel.findOne(
      { _id: loggedInUser._id },
      { passwordHash: 0 }
    );

    if (!user) {
      return res.status(400).json({ message: "This user does not exist." });
    }

    req.currentUser = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

module.exports = attachCurrentUser;
