import { Schema, model, Types } from "mongoose"
import {
  IPostData,
  ILikesData,
  ICommentsData,
} from "../interface/post.interface"

const postSchema = new Schema<IPostData>(
  {
    userId: { type: Types.ObjectId, required: true },
    mediaType: { type: String, enum: ["Picture", "Video"], default: "Picture" },
    mediaUrl: { type: String, required: true },
    caption: { type: String },
    likes: {
      likesArray: [
        {
          byUser: { type: Types.ObjectId, required: true, default: [] },
        },
      ],
      likesNumber: { type: Number, default: 0 },
    },
    comments: {
      commentsMessages: [
        {
          message: String,
          byUser: { type: Types.ObjectId, required: true },
          default: [],
        },
      ],
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
