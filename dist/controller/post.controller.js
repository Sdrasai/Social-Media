"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
const post_service_1 = __importDefault(require("../service/post.service"));
const controller_decorator_1 = require("../common/decorators/controller.decorator");
const common_1 = require("../common");
let PostController = class PostController {
    constructor() {
        this.postService = new post_service_1.default();
    }
    createPost(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield this.postService.createPostService(req.body.userId, req.body.mediaType, req.body.mediaUrl, req.body.caption, req.body.likes, req.body.comments, req.body.saved);
                res.json({ Message: "New post created", post }).status(200);
            }
            catch (err) {
                console.log(err);
                next(err);
            }
        });
    }
    getAllPost(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allPost = yield this.postService.findAllPostService();
                res.json(allPost).status(200);
            }
            catch (err) {
                console.log(err);
                next(err);
            }
        });
    }
    findOnePost(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield this.postService.findOnePostService(req.params.postId);
                res.json(post).status(200);
            }
            catch (err) {
                console.log(err);
                next(err);
            }
        });
    }
    updatePost(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newPost = yield this.postService.updatePostService(req.params.postId, req.body.caption, req.body.likes, req.body.comments, req.body.saved);
                res.send(newPost).status(200).json({ message: "Post has been updated" });
            }
            catch (err) {
                console.log(err);
                next(err);
            }
        });
    }
    deletePost(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.postService.deletePostService(req.params.postId);
                res.json({ message: "The Post has been deleted" }).status(200);
            }
            catch (err) {
                console.log(err);
                next(err);
            }
        });
    }
    addCommentToPost(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const comment = yield this.postService.addCommentToPostService(req.params.postId, req.body.userId, req.body.message);
                res.json({ comment });
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    likePost(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const like = yield this.postService.likePostService(req.params.postId, req.body.userId);
                res.json(like);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
};
__decorate([
    (0, common_1.Post)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getAllPost", null);
__decorate([
    (0, common_1.Get)("/:postId"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "findOnePost", null);
__decorate([
    (0, common_1.Put)("/:postId"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Delete)("/:postId"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "deletePost", null);
__decorate([
    (0, common_1.Put)("/comments/:postId"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "addCommentToPost", null);
__decorate([
    (0, common_1.Put)("/like/:postId"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "likePost", null);
PostController = __decorate([
    (0, controller_decorator_1.Controller)("/post")
], PostController);
exports.default = PostController;
//# sourceMappingURL=post.controller.js.map