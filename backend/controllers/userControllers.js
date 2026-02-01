const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");

// REGISTER USER
const registerUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const newUser = await user.save();

    res.status(201).json({
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(400).json({
      message: "User registration failed",
      error: error.message,
    });
  }
};
//http://127.0.0.1:5000/api/user/register

// LOGIN USER
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      "secretkey",
      { expiresIn: "1h" },
    );
    res.cookie("token", token, { httpOnly: true , maxAge: 3600000 , secure: false});

    res.status(200).json({
      message: "Login successful ",
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(400).json({
      message: "Login failed",
      error: error.message,
    });
  }
};

//http://127.0.0.1:5000/api/user/login
// LOGOUT USER
const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      message: "Logout successful",
    });
  } catch (error) {
    console.error("Error logging out user:", error);
    res.status(400).json({
      message: "Logout failed",
      error: error.message,
    });
  }
};

//http://127.0.0.1:5000/api/user/logout

module.exports = { registerUser, loginUser, logoutUser };
