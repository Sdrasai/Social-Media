"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const constants_1 = require("../constants");
require("reflect-metadata");
const Controller = (prefix = "") => {
    return (target) => {
        Reflect.defineMetadata(constants_1.PATH_METADATA, prefix, target);
        if (!Reflect.hasMetadata(constants_1.ROUTE_METADATA, target)) {
            Reflect.defineMetadata(constants_1.ROUTE_METADATA, [], target);
        }
    };
};
exports.Controller = Controller;
//# sourceMappingURL=controller.decorator.js.map