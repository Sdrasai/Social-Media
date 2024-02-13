import { RequestMethod } from "../enums/request-method.enum";
export interface RequestMappingMetadata {
    path: string;
    requestMethod: RequestMethod;
    methodName?: any;
}
export declare const Get: (path: string) => MethodDecorator;
export declare const Post: (path: string) => MethodDecorator;
export declare const Delete: (path: string) => MethodDecorator;
export declare const Put: (path: string) => MethodDecorator;
