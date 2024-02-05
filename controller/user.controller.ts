import userModel from "../models/user.model"
import mongoose from "mongoose"
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
      res.json({ data: newUser }).status(200)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  public async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const allUsers = await this.userService.findAllUserService()
      res.json({ data: allUsers })
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
      res.json({ user }).status(200)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  public async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userService.updateUserService(
        req.body.username,
        req.body.password,
        req.body.email
      )
      res.json({ user }).status(200)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  public async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const deletedUser = await this.userService.deleteUserService(
        req.body.username,
        req.body.password
      )
      res.json({ deletedUser }).status(200)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
}

export default UserController
