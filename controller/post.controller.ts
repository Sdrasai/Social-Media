import PostService from "../service/post.service"
import { NextFunction, Request, Response } from "express"
import { Controller } from "../common/decorators/controller.decorator"
import { Post, Get, Delete, Put } from "../common"

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

  @Get("/:postId")
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
      await this.postService.deletePostService(req.params.postId)
      res.json({ message: "The Post has been deleted" }).status(200)
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
    try {
      const comment = await this.postService.addCommentToPostService(
        req.params.postId,
        req.body.userId,
        req.body.message
      )
      res.json({ comment })
    } catch (err) {
      console.log(err)
    }
  }
  @Put("/like/:postId")
  public async likePost(req: Request, res: Response, next: NextFunction) {
    try {
      const like = await this.postService.likePostService(
        req.params.postId,
        req.body.userId
      )
      res.json(like)
    } catch (err) {
      console.log(err)
    }
  }
}

export default PostController
