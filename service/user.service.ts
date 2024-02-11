import IUser from "../interface/user.interface"
import userModel from "../models/user.model"

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
    return await this.userModel.findOne({ userId })
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
    return await this.userModel.findByIdAndUpdate({
      userId,
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

  public async deleteUserService(userId: string) {
    return await this.userModel.findByIdAndDelete({
      userId,
    })
  }
}

export default UserService
