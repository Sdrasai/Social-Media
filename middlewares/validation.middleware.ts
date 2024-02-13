import { plainToClass } from "class-transformer"
import { validate, ValidationError } from "class-validator"
import { RequestHandler } from "express"
import { NextFunction, Request, Response } from "express"
import { HttpException } from "../exceptions/http.exception"

const validationMiddleware = (
  type: any,
  value: string | "body" | "query" | "params" = "body",
  skipMissingProperties = false,
  whitelist = true,
  forbidNonWhitelisted = true
): RequestHandler => {
  return (req: any, res, next) => {
    validate(plainToClass(type, req[value]), {
      skipMissingProperties,
      whitelist,
      forbidNonWhitelisted,
    }).then((errors: ValidationError[]) => {
      const message = errors
        .map((error: ValidationError) => {
          if (error && error.constraints) {
            return Object.values(error.constraints)
          }
          return []
        })
        .join(", ")

      if (message) {
        next(new HttpException(400, message))
      } else {
        next()
      }
    })
  }
}

export default validationMiddleware
