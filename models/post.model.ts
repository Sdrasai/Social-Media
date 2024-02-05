import Post from "../interface/post.interface";
import { Schema, model } from "mongoose";

const postSchema = new Schema({
  image: { type: String, required: true },
  caption: { type: String },
  likes: { type: [String] },
  likesNumber: { type: Number },
  comments: { type: [String] },
  commentsNumber: { type: Number },
  commentsMessage: { type: String },
  saved: { type: Boolean },
});

const postModel = model("Post", postSchema);

export default postModel;
