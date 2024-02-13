"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../index");
class Route {
    constructor(Controller) {
        this.router = (0, express_1.Router)();
        this.ControllerClass = Controller;
        this.controller = new Controller();
        this.setupRoutes();
    }
    setupRoutes() {
        this.prefix = Reflect.getMetadata(index_1.PATH_METADATA, this.ControllerClass);
        let middleware = Reflect.getMetadata(index_1.MIDDLEWARE_METADATA, this.ControllerClass);
        if (middleware && middleware[index_1.CLASS_MIDDLEWARE_METADATA].length > 0) {
            this.router.use(...middleware[index_1.CLASS_MIDDLEWARE_METADATA]);
        }
        const routes = Reflect.getMetadata(index_1.ROUTE_METADATA, this.controller);
        routes.forEach((route) => {
            if (middleware && middleware[route.methodName]) {
                this.router[route.requestMethod](route.path, ...middleware[route.methodName], (req, res, next) => {
                    this.controller[route.methodName](req, res, next);
                });
            }
            else {
                this.router[route.requestMethod](route.path, (req, res, next) => {
                    this.controller[route.methodName](req, res, next);
                });
            }
        });
    }
}
exports.default = Route;
//# sourceMappingURL=index.js.map