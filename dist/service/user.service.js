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
const mongodb_1 = require("mongodb");
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
            console.log(userId);
            return yield this.userModel.findById(new mongodb_1.ObjectId(userId));
        });
    }
    updateUserService(userId, username, password, email, followers, following, followRequest, posts, savedPost) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = yield this.userModel.findByIdAndUpdate({ _id: new mongodb_1.ObjectId(userId) }, {
                userId,
                username,
                password,
                email,
                followers,
                following,
                followRequest,
                posts,
                savedPost,
            }, { new: true });
            return newUser;
        });
    }
    deleteUserService(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.findByIdAndDelete({ _id: new mongodb_1.ObjectId(userId) });
        });
    }
    checkingUserService(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.findOne({ username });
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=user.service.js.map