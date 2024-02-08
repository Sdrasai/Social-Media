import { Router } from "express"
// import { IRoute } from ".../interface/route.interface"
import { IRoute } from "../../interface/route.interface"

import {
  CLASS_MIDDLEWARE_METADATA,
  MIDDLEWARE_METADATA,
  MiddlewareMetaData,
  PATH_METADATA,
  ROUTE_METADATA,
  RequestMappingMetadata,
} from "../index"

class Route implements IRoute {
  public prefix: any /*string*/
  public router = Router()
  public ControllerClass: any
  public controller: any

  constructor(Controller: any) {
    this.ControllerClass = Controller
    this.controller = new Controller()
    this.setupRoutes()
  }

  private setupRoutes() {
    this.prefix = Reflect.getMetadata(PATH_METADATA, this.ControllerClass)
    let middleware: MiddlewareMetaData = Reflect.getMetadata(
      MIDDLEWARE_METADATA,
      this.ControllerClass
    )

    if (middleware && middleware[CLASS_MIDDLEWARE_METADATA].length > 0) {
      this.router.use(...middleware[CLASS_MIDDLEWARE_METADATA])
    }

    const routes: Array<RequestMappingMetadata> = Reflect.getMetadata(
      ROUTE_METADATA,
      this.controller
    )

    routes.forEach((route) => {
      if (middleware && middleware[route.methodName]) {
        this.router[route.requestMethod](
          route.path,
          ...middleware[route.methodName],
          (req, res, next) => {
            this.controller[route.methodName](req, res, next)
          }
        )
      } else {
        this.router[route.requestMethod](route.path, (req, res, next) => {
          this.controller[route.methodName](req, res, next)
        })
      }
    })
  }
}

export default Route
