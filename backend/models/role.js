import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
  name: String,
  description: String,
  dbStatus: Boolean,
  registerDate: {
    type: Date,
    default: Date.now,
  },
});

const role = mongoose.model("roles", RoleSchema);

export default role;
