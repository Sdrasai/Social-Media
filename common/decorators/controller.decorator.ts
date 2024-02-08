import { PATH_METADATA, ROUTE_METADATA } from "../constants"
import "reflect-metadata"
export const Controller = (prefix: string = ""): ClassDecorator => {
  return (target: any) => {
    Reflect.defineMetadata(PATH_METADATA, prefix, target)

    if (!Reflect.hasMetadata(ROUTE_METADATA, target)) {
      Reflect.defineMetadata(ROUTE_METADATA, [], target)
    }
  }
}
