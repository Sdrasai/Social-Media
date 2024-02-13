"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const user_controller_1 = __importDefault(require("./controller/user.controller"));
const post_route_1 = __importDefault(require("./routes/post.route"));
const post_controller_1 = __importDefault(require("./controller/post.controller"));
const app = new app_1.default([
    new user_route_1.default(user_controller_1.default),
    new post_route_1.default(post_controller_1.default),
]);
app.listen();
//# sourceMappingURL=server.js.map