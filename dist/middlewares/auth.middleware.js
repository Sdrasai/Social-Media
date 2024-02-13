"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authentication = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class Authentication {
    authentication(req, res, next) {
        try {
            const { authorization } = req.headers;
            if (!authorization) {
                throw new Error("token should be in header!");
            }
            const token = authorization.split(" ")[1];
            const verified = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
            if (!verified) {
                throw new Error("token is not valid!");
            }
            next();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.Authentication = Authentication;
//# sourceMappingURL=auth.middleware.js.map