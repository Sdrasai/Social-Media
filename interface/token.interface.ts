import { Types } from "mongoose"

interface IToken {
  userId: string
  user: Types.ObjectId
  token: string
  loggedInAt: Date
}

export default IToken
