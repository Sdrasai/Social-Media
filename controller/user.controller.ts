import UserService from "../service/user.service"
import { NextFunction, Request, Response } from "express"
import { Controller } from "../common/decorators/controller.decorator"
import { Post, Get, Delete, Put, Middleware } from "../common"
import { CreateUserDto, UpdateUserDto } from "../dtos/user.dto"
import validationMiddleware from "../middlewares/validation.middleware"
import { Hash } from "../utils/hashPassword"
import { Token } from "../utils/createToken"

@Controller("/users")
class UserController {
  private userService = new UserService()
  private hash = new Hash()
  private tokenClass = new Token()

  @Post("/")
  @Middleware(validationMiddleware(CreateUserDto, "body"))
  public async createUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const newUser = await this.userService.createUserService(
        req.body.username,
        req.body.password,
        req.body.email,
        req.body.followers,
        req.body.following,
        req.body.followRequest,
        req.body.posts,
        req.body.savedPost
      )
      res
        .json({
          Message: `${req.body.username} Welcome to our community!`,
          newUser,
        })
        .status(200)
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

  @Get("/:id")
  public async findOneUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userService.findOneUserService(req.params.userId)
      res.json(user).status(200)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  @Put("/:userId")
  @Middleware(validationMiddleware(UpdateUserDto, "body", true))
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

  @Delete("/:id")
  public async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const deletedUser = await this.userService.deleteUserService(
        req.params.userId
      )
      res.json(deletedUser).status(200)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userService.checkingUserService(
        req.body.username,
        req.body.password
      )
      if (!user) {
        throw new Error("Username or password is not correct!")
      }
      const verified = await this.hash.comparingPassword(
        req.body.password,
        user.password
      )
      if (!verified) {
        throw new Error("Username or password is not correct!")
      }
      const token = await this.tokenClass.createToken(
        { userName },
        process.env.SECRET_KEY,
        process.env.ACCESS_TOKEN_TIME,
        process.env.REFRESH_TOKEN_TIME,
        userName
      )
      return res.json({ token })
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
}

export default UserController
