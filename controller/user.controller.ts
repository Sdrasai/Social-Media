import userModel from "../models/user.model"
import mongoose from "mongoose"
import UserService from "../service/user.service"
import { NextFunction, Request, Response } from "express"

class UserController {
  private userService = new UserService()

  public async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const allUsers = await this.userService.findAllUser()
      res.json({ data: allUsers })
    } catch (error) {
      console.log("error")
      next(error)
    }
  }

  public async createUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const newUser = await this.userService.createUser(
        req.body.username,
        req.body.password,
        req.body.email
      )
      res.json({ data: newUser }).status(200)
    } catch (err) {
      console.log(err)
    }
  }
}

export default UserController
