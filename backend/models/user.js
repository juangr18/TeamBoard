import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: mongoose.Schema.ObjectId, ref: "roles" },
  registerDate: {
    type: Date,
    default: Date.now,
  },
  dbStatus: Boolean,
});

const user = mongoose.model("users", schema);

export default user;
