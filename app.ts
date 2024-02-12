import express from "express"
import { IRoute } from "./interface/route.interface"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

class App {
  private app: express.Application
  public port: any

  constructor(routes: IRoute[]) {
    this.app = express()
    this.port = process.env.PORT

    this.dbConnection()
    this.setupMiddlewares()
    this.setupRoutes(routes)
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
      console.log("Connected to DB...")
    } catch (err) {
      console.log(err)
    }
  }

  private setupMiddlewares() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  private setupRoutes(routes: IRoute[]) {
    routes.forEach((route) => {
      this.app.use(route.prefix, route.router)
    })
  }
}

export default App
