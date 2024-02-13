"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
const token_model_1 = __importDefault(require("../models/token.model"));
class Token {
    constructor() {
        this.userModel = user_model_1.default;
        this.tokenModel = token_model_1.default;
    }
    createToken(payload, secretKey, accessExpire, refreshExpire, username = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const accessToken = jsonwebtoken_1.default.sign(payload, secretKey, {
                expiresIn: accessExpire,
            });
            const refreshToken = jsonwebtoken_1.default.sign(payload, secretKey, {
                expiresIn: refreshExpire,
            });
            if (username) {
                const user = yield this.userModel.findOne({ username });
                if (user) {
                    yield this.tokenModel.create({
                        user: username,
                        token: refreshToken,
                    });
                }
            }
            return { refreshToken, accessToken };
        });
    }
}
exports.Token = Token;
//# sourceMappingURL=createToken.js.map