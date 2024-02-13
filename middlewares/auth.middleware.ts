import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
import { NextFunction, Request, Response } from "express"

export class Authentication {
  public authentication(req: Request, res: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers
      if (!authorization) {
        throw new Error("token should be in header!")
      }
      const token = authorization.split(" ")[1]
      const verified = jwt.verify(token, process.env.SECRET_KEY)

      if (!verified) {
        throw new Error("token is not valid!")
      }
      next()
    } catch (error) {
      next(error)
    }
  }
}
