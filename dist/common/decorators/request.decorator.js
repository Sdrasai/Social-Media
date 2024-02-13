"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Put = exports.Delete = exports.Post = exports.Get = void 0;
const constants_1 = require("../constants");
const request_method_enum_1 = require("../enums/request-method.enum");
const createMappingDecorator = (method) => (path) => {
    return (target, propertyKey /** string */) => {
        if (!Reflect.hasMetadata(constants_1.ROUTE_METADATA, target)) {
            Reflect.defineMetadata(constants_1.ROUTE_METADATA, [], target);
        }
        const routes = Reflect.getMetadata(constants_1.ROUTE_METADATA, target);
        routes.push({
            requestMethod: method,
            path,
            methodName: propertyKey,
        });
        Reflect.defineMetadata(constants_1.ROUTE_METADATA, routes, target);
    };
};
exports.Get = createMappingDecorator(request_method_enum_1.RequestMethod.GET);
exports.Post = createMappingDecorator(request_method_enum_1.RequestMethod.POST);
exports.Delete = createMappingDecorator(request_method_enum_1.RequestMethod.DELETE);
exports.Put = createMappingDecorator(request_method_enum_1.RequestMethod.PUT);
//# sourceMappingURL=request.decorator.js.map