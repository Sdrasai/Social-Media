import IUser from "../interface/user.interface"
import userModel from "../models/user.model"
import { ObjectId } from "mongodb"

class UserService {
  private userModel = userModel

  public async createUserService(
    username: string,
    password: string,
    email: string,
    followers?: number,
    following?: number,
    followRequest?: [string],
    posts?: [],
    savedPost?: []
  ) {
    return await this.userModel.create({
      username,
      password,
      email,
      followers,
      following,
      followRequest,
      posts,
      savedPost,
    })
  }

  public async findAllUserService(): Promise<IUser[]> {
    return await this.userModel.find()
  }

  public async findOneUserService(userId: string) {
    console.log(userId)
    return await this.userModel.findById(new ObjectId(userId))
  }

  public async updateUserService(
    userId: string,
    username: string,
    password: string,
    email: string,
    followers?: number,
    following?: number,
    followRequest?: [string],
    posts?: [],
    savedPost?: []
  ) {
    const newUser = await this.userModel.findByIdAndUpdate(
      { _id: new ObjectId(userId) },
      {
        userId,
        username,
        password,
        email,
        followers,
        following,
        followRequest,
        posts,
        savedPost,
      },
      { new: true }
    )
    return newUser
  }

  public async deleteUserService(userId: string) {
    return await this.userModel.findByIdAndDelete({ _id: new ObjectId(userId) })
  }

  public async checkingUserService(username: string, password: string) {
    return await this.userModel.findOne({ username })
  }
}

export default UserService
