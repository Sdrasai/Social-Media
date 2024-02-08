import User from "../interface/user.interface"
import { Schema, Types, model } from "mongoose"

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    followers: { type: Number },
    following: { type: Number },
    followRequest: { type: [String] },
    posts: { type: Types.ObjectId, ref: "Post" },
    savedPost: { type: Types.ObjectId, ref: "Post" },
  },
  {
    timestamps: true,
  }
)

const userModel = model("User", userSchema)

export default userModel
