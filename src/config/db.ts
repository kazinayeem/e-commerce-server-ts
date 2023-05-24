import mongoose from "mongoose";

export const db = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mongoshop");
    return "database is connected"
  } catch (error) {
    console.log(error);
  }
};
