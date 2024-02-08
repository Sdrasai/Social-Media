"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
const user_service_1 = __importDefault(require("../service/user.service"));
const controller_decorator_1 = require("../common/decorators/controller.decorator");
const common_1 = require("../common");
let UserController = class UserController {
    constructor() {
        this.userService = new user_service_1.default();
    }
    createUsers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = yield this.userService.createUserService(req.body.username, req.body.password, req.body.email, req.body.followers, req.body.following, req.body.followRequest, req.body.posts, req.body.savedPost);
                res
                    .json({
                    Message: `${req.body.username} Welcome to our community!`,
                    newUser,
                })
                    .status(200);
            }
            catch (err) {
                console.log(err);
                next(err);
            }
        });
    }
    getAllUsers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allUsers = yield this.userService.findAllUserService();
                res.json(allUsers);
            }
            catch (err) {
                console.log(err);
                next(err);
            }
        });
    }
    findOneUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.findOneUserService(req.params.username);
                res.json(user).status(200);
            }
            catch (err) {
                console.log(err);
                next(err);
            }
        });
    }
    updateUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.updateUserService(req.params.userId, req.body.username, req.body.password, req.body.email, req.body.followers, req.body.following, req.body.followRequest, req.body.post, req.body.savedPost);
                res.json(user).status(200);
            }
            catch (err) {
                console.log(err);
                next(err);
            }
        });
    }
    deleteUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedUser = yield this.userService.deleteUserService(req.params.userId, req.body.username, req.body.password);
                res.json(deletedUser).status(200);
            }
            catch (err) {
                console.log(err);
                next(err);
            }
        });
    }
};
__decorate([
    (0, common_1.Post)("/")
], UserController.prototype, "createUsers", null);
__decorate([
    (0, common_1.Get)("/")
], UserController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)("/:id")
], UserController.prototype, "findOneUser", null);
__decorate([
    (0, common_1.Put)("/:id")
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)("/:id")
], UserController.prototype, "deleteUser", null);
UserController = __decorate([
    (0, controller_decorator_1.Controller)("/users")
], UserController);
exports.default = UserController;
