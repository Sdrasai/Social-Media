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
const post_service_1 = __importDefault(require("../service/post.service"));
class PostController {
    constructor() {
        this.postService = new post_service_1.default();
    }
    createPost(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield this.postService.createPostService(req.body.user, req.body.mediaType, req.body.mediaUrl, req.body.caption, req.body.likes, req.body.comments, req.body.saved);
                res.send(post).status(200).json({ message: "New post created" });
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
                const newPost = yield this.postService.updatePostService(req.body.postId, req.body.caption, req.body.likes, req.body.comments, req.body.saved);
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
                const deletedPost = yield this.postService.deletePostService(req.params.postId);
                res
                    .send(deletedPost)
                    .status(200)
                    .json({ message: "The Post has been deleted" });
            }
            catch (err) {
                console.log(err);
                next(err);
            }
        });
    }
}
exports.default = PostController;
