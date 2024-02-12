// export enum MediaTypes {
//   Picture = "picture",
//   Video = "video",
// }

// interface IPost {
//   mediaType: string
//   mediaUrl: string
//   caption?: string
//   likes?: [string]
//   likesNumber?: number
//   comments?: [string]
//   commentsNumber?: number
//   commentsMessage?: string
//   saved?: boolean
// }

// export default IPost
import { Types } from "mongoose"

export interface IPostData {
  userId: any
  mediaType: string
  mediaUrl: string
  caption: string
  likes: ILikesData
  comments: ICommentsData
  saved: boolean
}

export interface ILikesData {
  byUser: string[]
  likesNumber: number
}

export interface ICommentsData {
  commentsMessages: [{ userId: string; message: string }]
  commentsNumber: number
}

// comments: {
//   type: ICommentsData[] // Array of comment objects
//   default: never[] // Default value is an empty array
//   commentsNumber: number // Number of comments
// }

// export interface ICommentsData {
//   message: string
//   byUser: Types.ObjectId
// }
