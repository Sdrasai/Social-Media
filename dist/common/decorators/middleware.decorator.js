"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middleware = void 0;
const constants_1 = require("../constants");
const Middleware = (...handlers) => {
    return (target, key, // string | symbol,
    descriptor) => {
        if (!descriptor) {
            if (!Reflect.hasMetadata(constants_1.MIDDLEWARE_METADATA, target)) {
                Reflect.defineMetadata(constants_1.MIDDLEWARE_METADATA, { [constants_1.CLASS_MIDDLEWARE_METADATA]: [] }, target);
            }
            const middleware = Reflect.getMetadata(constants_1.MIDDLEWARE_METADATA, target);
            middleware[constants_1.CLASS_MIDDLEWARE_METADATA] = handlers;
            Reflect.defineMetadata(constants_1.MIDDLEWARE_METADATA, middleware, target);
        }
        else {
            if (!Reflect.hasMetadata(constants_1.MIDDLEWARE_METADATA, target.constructor)) {
                Reflect.defineMetadata(constants_1.MIDDLEWARE_METADATA, { [constants_1.CLASS_MIDDLEWARE_METADATA]: [] }, target.constructor);
            }
            const middleware = Reflect.getMetadata(constants_1.MIDDLEWARE_METADATA, target.constructor);
            middleware[key] = handlers;
            Reflect.defineMetadata(constants_1.MIDDLEWARE_METADATA, middleware, target.constructor);
        }
    };
};
exports.Middleware = Middleware;
//# sourceMappingURL=middleware.decorator.js.map