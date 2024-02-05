import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

class App {
  private app: express.Application
  public port: any

  constructor() {
    this.app = express()
    this.port = process.env.PORT

    this.dbConnection()
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`)
    })
  }

  private async dbConnection() {
    try {
      await mongoose.connect(
        `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
      )
      console.log("Connected to DB")
    } catch (err) {
      console.log(err)
    }
  }
}

export default App
