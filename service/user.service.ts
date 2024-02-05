import mongoose from "mongoose"
import IUser from "../interface/user.interface"
import userModel from "../models/user.model"

class UserService {
  private userModel = userModel
  public async findAllUser(): Promise<IUser[]> {
    return await this.userModel.find()
  }
  public async createUser(username: string, password: string, email: string) {
    return await this.userModel.create({
      username,
      password,
      email,
    })
  }
}

export default UserService
