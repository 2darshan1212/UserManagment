import user from "../models/user.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).json({
      success: true,
      messsage: "All users fetched successfully",
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, gender, city } = req.body;
    const profile = req.file.filename;
    if (name && email && gender && city && profile) {
    const isEmailExist = await user.findOne({ email });
    if (!isEmailExist) {
      const newUser = user.create({
        name,
        email,
        gender,
        city,
        profile,
      });
      res.status(200).json({
        success: true,
        message: "User created successfully",
        newUser,
      });
    }else{
        res.status(400).json({
          success: false,
          message: "Email already exists",
        });
    }
    } else {
      res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
