import { ROUTE_METADATA } from "../constants"
import { RequestMethod } from "../enums/request-method.enum"

export interface RequestMappingMetadata {
  path: string
  requestMethod: RequestMethod
  methodName?: any /*string*/
}

const createMappingDecorator =
  (method: RequestMethod) =>
  (path: string): MethodDecorator => {
    return (target: any, propertyKey: any /** string */) => {
      if (!Reflect.hasMetadata(ROUTE_METADATA, target)) {
        Reflect.defineMetadata(ROUTE_METADATA, [], target)
      }

      const routes = Reflect.getMetadata(
        ROUTE_METADATA,
        target
      ) as Array<RequestMappingMetadata>

      routes.push({
        requestMethod: method,
        path,
        methodName: propertyKey,
      })
      Reflect.defineMetadata(ROUTE_METADATA, routes, target)
    }
  }

export const Get = createMappingDecorator(RequestMethod.GET)

export const Post = createMappingDecorator(RequestMethod.POST)

export const Delete = createMappingDecorator(RequestMethod.DELETE)

export const Put = createMappingDecorator(RequestMethod.PUT)
