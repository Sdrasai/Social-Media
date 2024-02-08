import { Schema, model, Types } from "mongoose"
import {
  IPostData,
  ILikesData,
  ICommentsData,
} from "../interface/post.interface"

const postSchema = new Schema<IPostData>(
  {
    user: { type: Types.ObjectId, ref: "User", required: true },
    mediaType: { type: String, enum: ["Picture", "Video"], default: "Picture" }, // Assuming mediaType can be either Picture or Video
    mediaUrl: { type: String, required: true },
    caption: { type: String },
    likes: {
      byUser: { type: [String], default: [] }, // Assuming byUser is an array of user IDs
      likesNumber: { type: Number, default: 0 },
    },
    comments: {
      byUser: { type: [String], default: [] }, // Assuming byUser is an array of user IDs
      commentsMessage: { type: [String], default: [] },
      commentsNumber: { type: Number, default: 0 },
    },
    saved: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
)

const PostModel = model<IPostData>("Post", postSchema)

export default PostModel
