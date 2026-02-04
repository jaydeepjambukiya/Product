const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// REGISTER USER
const registerUser = async (req, res) => {
  try {
    // console.log("REQ BODY 👉", req.body);
    // const user = new User(req.body);
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User with this email already exists",
      });
    }
    console.log("REQ BODY 👉", req.body); // ADD THIS

    
    const user = new User({
      name,
      email,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

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
// LOGIN USER
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // compare password (IMPORTANT)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // generate JWT
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      "secretkey",
      { expiresIn: "1h" }
    );

    // set cookie
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 3600000,
      secure: false, // true in production (https)
      sameSite: "lax",
    });

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({
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
