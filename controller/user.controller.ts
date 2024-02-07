import UserService from "../service/user.service"
import { NextFunction, Request, Response } from "express"

class UserController {
  private userService = new UserService()

  public async createUsers(req: Request, res: Response, next: NextFunction) {
    try {
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

  public async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const allUsers = await this.userService.findAllUserService()
      res.json(allUsers)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

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
