import postModel from "../models/post.model"
import { IPostData } from "../interface/post.interface"
import { Types } from "mongoose"
import IUser from "../interface/user.interface"

class PostService {
  private postModel = postModel

  async createPostService(
    userId: Types.ObjectId,
    mediaType: string,
    mediaUrl: string,
    caption?: string,
    likesByUser?: string[],
    comments?: Partial<IPostData["comments"]>,
    saved?: boolean
  ) {
    try {
      return await this.postModel.create({
        userId,
        mediaType,
        mediaUrl,
        caption,
        likes: {
          byUser: likesByUser,
          likesNumber: 0,
        },
        comments,
        saved,
      })
    } catch (err) {
      console.log(err)
    }
  }

  public async findAllPostService() {
    return await this.postModel.find()
  }

  public async findOnePostService(postId: string) {
    return await this.postModel.findOne({ postId })
  }

  public async updatePostService(
    postId: string,
    caption?: string,
    likesByUser?: string[],
    comments?: Partial<IPostData["comments"]>,
    saved?: boolean
  ) {
    return await this.postModel.findByIdAndUpdate({
      postId,
      caption,
      likes: {
        byUser: likesByUser,
        likesNumber: 0,
      },
      comments,
      saved,
    })
  }
  public async deletePostService(postId: string) {
    return await this.postModel.deleteMany({ postId })
  }

  public async addCommentToPostService(
    postId: string,
    userId: string,
    message: string
  ) {
    const post = await this.postModel.findById(postId)
    console.log("PostIddddddd", postId)
    console.log("Posttttttt", post)

    if (!post) {
      throw new Error("Post not found")
    }

    post.comments.commentsMessages.push({
      userId: userId,
      message: message,
    })
    post.comments.commentsNumber += 1
    return post
  }
}

export default PostService
