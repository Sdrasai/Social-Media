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
const user_model_1 = __importDefault(require("../models/user.model"));
class UserService {
    constructor() {
        this.userModel = user_model_1.default;
    }
    createUserService(username, password, email, followers, following, followRequest, posts, savedPost) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.create({
                username,
                password,
                email,
                followers,
                following,
                followRequest,
                posts,
                savedPost,
            });
        });
    }
    findAllUserService() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.find();
        });
    }
    findOneUserService(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.findOne({ userId });
        });
    }
    updateUserService(userId, username, password, email, followers, following, followRequest, posts, savedPost) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.findByIdAndUpdate({
                userId,
                username,
                password,
                email,
                followers,
                following,
                followRequest,
                posts,
                savedPost,
            });
        });
    }
    deleteUserService(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.findByIdAndDelete({
                userId,
            });
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=user.service.js.map