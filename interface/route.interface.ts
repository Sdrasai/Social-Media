import { Router } from "express"

export interface IRoute {
  prefix: string
  router: Router
}
