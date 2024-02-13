import type { RequestHandler } from "express";
import { CLASS_MIDDLEWARE_METADATA } from "../constants";
export interface MiddlewareMetaData {
    [key: string | symbol]: Array<RequestHandler>;
    [CLASS_MIDDLEWARE_METADATA]: Array<RequestHandler>;
}
export declare const Middleware: (...handlers: Array<RequestHandler>) => ClassDecorator & MethodDecorator;
