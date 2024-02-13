import jwt from "jsonwebtoken"
import userModel from "../models/user.model"
import tokenModel from "../models/token.model"

export class Token {
  private userModel = userModel
  private tokenModel = tokenModel

  public async createToken(
    payload: any,
    secretKey: string,
    accessExpire: string,
    refreshExpire: string,
    username: string | null = null
  ) {
    const accessToken = jwt.sign(payload, secretKey, {
      expiresIn: accessExpire,
    })
    const refreshToken = jwt.sign(payload, secretKey, {
      expiresIn: refreshExpire,
    })

    if (username) {
      const user = await this.userModel.findOne({ username })
      if (user) {
        await this.tokenModel.create({
          user: username,
          token: refreshToken,
        })
      }
    }
    return { refreshToken, accessToken }
  }
}
