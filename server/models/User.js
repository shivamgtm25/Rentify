const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true, // Trims whitespace
    },
    lastName: {
      type: String,
      required: true,
      trim: true, // Trims whitespace
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // Stores emails in lowercase for consistency
      trim: true, // Trims whitespace
      match: [/.+@.+\..+/, "Please enter a valid email address."], // Email format validation
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Minimum password length for security
    },
    profileImagePath: {
      type: String,
      default: "",
    },
    tripList: {
      type: [String], // Specify the type for better validation
      default: [],
    },
    wishList: {
      type: [String], // Specify the type for better validation
      default: [],
    },
    propertyList: {
      type: [String], // Specify the type for better validation
      default: [],
    },
    reservationList: {
      type: [String], // Specify the type for better validation
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
