import UserService from "../service/user.service"
import { NextFunction, Request, Response } from "express"
import { Controller } from "../common/decorators/controller.decorator"
import { Post, Get, Delete, Put } from "../common"

@Controller("/users")
class UserController {
  private userService = new UserService()

  @Post("/")
  public async createUsers(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("salam")
      const newUser = await this.userService.createUserService(
        req.body.username,
        req.body.password,
        req.body.email
      )
      res.json(newUser).status(200)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  @Get("/")
  public async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const allUsers = await this.userService.findAllUserService()
      res.json(allUsers)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  @Get("/")
  public async findOneUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userService.findOneUserService(
        req.params.username
      )
      res.json(user).status(200)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  @Put("/")
  public async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userService.updateUserService(
        req.params.userId,
        req.body.username,
        req.body.password,
        req.body.email,
        req.body.followers,
        req.body.following,
        req.body.followRequest,
        req.body.post,
        req.body.savedPost
      )
      res.json(user).status(200)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  @Delete("/")
  public async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const deletedUser = await this.userService.deleteUserService(
        req.params.userId,
        req.body.username,
        req.body.password
      )
      res.json(deletedUser).status(200)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
}

export default UserController
