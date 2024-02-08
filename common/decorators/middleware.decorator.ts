import type { RequestHandler } from "express"
import { CLASS_MIDDLEWARE_METADATA, MIDDLEWARE_METADATA } from "../constants"

export interface MiddlewareMetaData {
  [key: string | symbol]: Array<RequestHandler>
  [CLASS_MIDDLEWARE_METADATA]: Array<RequestHandler>
}

export const Middleware = (
  ...handlers: Array<RequestHandler>
): ClassDecorator & MethodDecorator => {
  return (
    target: any,
    key?: any, // string | symbol,
    descriptor?: TypedPropertyDescriptor<any>
  ) => {
    if (!descriptor) {
      if (!Reflect.hasMetadata(MIDDLEWARE_METADATA, target)) {
        Reflect.defineMetadata(
          MIDDLEWARE_METADATA,
          { [CLASS_MIDDLEWARE_METADATA]: [] },
          target
        )
      }
      const middleware: MiddlewareMetaData = Reflect.getMetadata(
        MIDDLEWARE_METADATA,
        target
      )
      middleware[CLASS_MIDDLEWARE_METADATA] = handlers
      Reflect.defineMetadata(MIDDLEWARE_METADATA, middleware, target)
    } else {
      if (!Reflect.hasMetadata(MIDDLEWARE_METADATA, target.constructor)) {
        Reflect.defineMetadata(
          MIDDLEWARE_METADATA,
          { [CLASS_MIDDLEWARE_METADATA]: [] },
          target.constructor
        )
      }
      const middleware: MiddlewareMetaData = Reflect.getMetadata(
        MIDDLEWARE_METADATA,
        target.constructor
      )
      middleware[key] = handlers
      Reflect.defineMetadata(
        MIDDLEWARE_METADATA,
        middleware,
        target.constructor
      )
    }
  }
}
