export enum MediaTypes {
  Picture = "picture",
  Video = "video",
}

interface IPost {
  mediaType: string
  mediaUrl: string
  caption: string
  likes: [string]
  likesNumber: number
  comments: [string]
  commentsNumber: number
  commentsMessage: string
  saved: boolean
}

export default IPost
