import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    min: 3,
    max: 100,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    min: 3,
    max: 100,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    required: true,
    default: false,
    type: Boolean,
  },
  isBanned : {
    required: true,
    default: false,
    type: Boolean,
  },
  cartItem: [
    {
      ref: "cart",
      type: String,
      required: false,
    },
  ],
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
