import PostService from "../service/post.service"
import { NextFunction, Request, Response } from "express"
import { Controller } from "../common/decorators/controller.decorator"
import { Post, Get, Delete, Put } from "../common"
import userModel from "../models/user.model"

@Controller("/post")
class PostController {
  private postService = new PostService()

  @Post("/")
  public async createPost(req: Request, res: Response, next: NextFunction) {
    try {
      const post = await this.postService.createPostService(
        req.body.userId,
        req.body.mediaType,
        req.body.mediaUrl,
        req.body.caption,
        req.body.likes,
        req.body.comments,
        req.body.saved
      )
      // const userId = JSON.parse(req.body.user._id)
      // const user = await userModel.findById({ userId })
      // if (!user) {
      //   throw new Error("User not found")
      // } else {
      //   res.json({ Message: "New post created", post }).status(200)
      // }
      res.json({ Message: "New post created", post }).status(200)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  @Get("/")
  public async getAllPost(req: Request, res: Response, next: NextFunction) {
    try {
      const allPost = await this.postService.findAllPostService()
      res.json(allPost).status(200)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  @Get("/:id")
  public async findOnePost(req: Request, res: Response, next: NextFunction) {
    try {
      const post = await this.postService.findOnePostService(req.params.postId)
      res.json(post).status(200)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  @Put("/:postId")
  public async updatePost(req: Request, res: Response, next: NextFunction) {
    try {
      const newPost = await this.postService.updatePostService(
        req.params.postId,
        req.body.caption,
        req.body.likes,
        req.body.comments,
        req.body.saved
      )
      res.send(newPost).status(200).json({ message: "Post has been updated" })
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  @Delete("/:postId")
  public async deletePost(req: Request, res: Response, next: NextFunction) {
    try {
      const deletedPost = await this.postService.deletePostService(
        req.params.postId
      )
      res
        .send(deletedPost)
        .status(200)
        .json({ message: "The Post has been deleted" })
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
  @Put("/comments/:postId")
  public async addCommentToPost(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const comment = await this.postService.addCommentToPostService(
      req.params.postId,
      req.body.userId,
      req.body.message
    )
    res.json({ message: "Comment added", comment }).status(200)
  }
}

export default PostController
