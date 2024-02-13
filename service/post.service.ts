import postModel from "../models/post.model"
import { IPostData } from "../interface/post.interface"
import { Types } from "mongoose"
import { ObjectId } from "mongodb"
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
    console.log(postId)
    return await this.postModel.findById(new ObjectId(postId))
  }

  public async updatePostService(
    postId: string,
    caption?: string,
    likesByUser?: string[],
    comments?: Partial<IPostData["comments"]>,
    saved?: boolean
  ) {
    const updatedPost = await this.postModel.findByIdAndUpdate(
      { _id: new ObjectId(postId) },
      {
        caption,
        likes: {
          byUser: likesByUser,
          likesNumber: 0,
        },
        comments,
        saved,
      },
      { new: true }
    )
    return updatedPost
  }
  public async deletePostService(postId: string) {
    return await this.postModel.deleteMany(new ObjectId(postId))
  }

  public async addCommentToPostService(
    postId: string,
    userId: string,
    message: string
  ) {
    const post = await this.postModel.findById(new ObjectId(postId))
    console.log("PostIddddddd", postId)
    console.log("Posttttttt", post)

    if (!post) {
      throw new Error("Post not found")
    }
    const updatedPost = await this.postModel.findOneAndUpdate(
      { _id: new ObjectId(postId) },
      {
        $push: {
          "comments.commentsMessages": {
            userId: userId,
            message: message,
          },
        },
        $inc: { "comments.commentsNumber": 1 },
      },
      { new: true }
    )

    return updatedPost
  }
}

export default PostService
