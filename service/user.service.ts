import mongoose from "mongoose"
import IUser from "../interface/user.interface"
import userModel from "../models/user.model"

class UserService {
  private userModel = userModel

  public async createUserService(
    username: string,
    password: string,
    email: string
  ) {
    return await this.userModel.create({
      username,
      password,
      email,
    })
  }

  public async findAllUserService(): Promise<IUser[]> {
    return await this.userModel.find()
  }

  public async findOneUserService(username: string) {
    return await this.userModel.findOne({ username })
  }

  public async updateUserService(
    username: string,
    password: string,
    email: string
  ) {
    return await this.userModel.updateMany({ username, password, email })
  }

  public async deleteUserService(username: string, password: string) {
    return await this.userModel.deleteMany({ username, password })
  }
}

export default UserService
