import PostService from "../service/post.service"
import { NextFunction, Request, Response } from "express"

class PostController {
  private postService = new PostService()

  public async createPost(req: Request, res: Response, next: NextFunction) {
    try {
      const post = await this.postService.createPostService(
        req.body.user,
        req.body.mediaType,
        req.body.mediaUrl,
        req.body.caption,
        req.body.likes,
        req.body.comments,
        req.body.saved
      )
      res.send(post).status(200).json({ message: "New post created" })
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  public async getAllPost(req: Request, res: Response, next: NextFunction) {
    try {
      const allPost = await this.postService.findAllPostService()
      res.json(allPost).status(200)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  public async findOnePost(req: Request, res: Response, next: NextFunction) {
    try {
      const post = await this.postService.findOnePostService(req.params.postId)
      res.json(post).status(200)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  public async updatePost(req: Request, res: Response, next: NextFunction) {
    try {
      const newPost = await this.postService.updatePostService(
        req.body.postId,
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
}

export default PostController
