import { MediaTypes } from "../interface/post.interface"
import IPost from "../interface/post.interface"

import { Schema, model } from "mongoose"

const postSchema = new Schema({
  mediaType: { type: String, enum: MediaTypes, default: MediaTypes.Picture },
  mediaUrl: { type: String },
  caption: { type: String },
  likes: { type: [String] },
  likesNumber: { type: Number },
  comments: { type: [String] },
  commentsNumber: { type: Number },
  commentsMessage: { type: String },
  saved: { type: Boolean },
})

const postModel = model("Post", postSchema)

export default postModel
