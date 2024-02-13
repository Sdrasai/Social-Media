import { Schema, model } from "mongoose"
import IToken from "../interface/token.interface"

const tokenSchema = new Schema<IToken>({
  userId: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  token: { type: String, required: true },
  loggedInAt: { type: Date, default: Date.now },
})

const tokenModel = model("Token", tokenSchema)

export default tokenModel
