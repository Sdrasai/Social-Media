import User from "../interface/user.interface"
import { Schema, Types, model } from "mongoose"

export const userSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    followers: { type: Number, default: 0 },
    following: { type: Number, default: 0 },
    followRequest: { type: [String] },
    posts: { type: Types.ObjectId, ref: "Post", default: [] },
    savedPost: { type: Types.ObjectId, ref: "Post", default: [] },
  },
  {
    timestamps: true,
  }
)

const userModel = model("User", userSchema)

export default userModel
