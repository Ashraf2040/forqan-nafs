import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    fullName: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },

  { timestamps: true }
);

// const User = mongoose.models.user || mongoose.model("User",userSchema)
// export default User
module.exports = mongoose.models.User || mongoose.model("User", userSchema);
