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
const post_model_1 = __importDefault(require("../models/post.model"));
class PostService {
    constructor() {
        this.postModel = post_model_1.default;
    }
    createPostService(userId, mediaType, mediaUrl, caption, likesByUser, comments, saved) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.postModel.create({
                    userId,
                    mediaType,
                    mediaUrl,
                    caption,
                    likes: {
                        byUser: likesByUser,
                        likesNumber: 0,
                    },
                    comments,
                    saved,
                });
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    findAllPostService() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postModel.find();
        });
    }
    findOnePostService(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postModel.findOne({ postId });
        });
    }
    updatePostService(postId, caption, likesByUser, comments, saved) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postModel.findByIdAndUpdate({
                postId,
                caption,
                likes: {
                    byUser: likesByUser,
                    likesNumber: 0,
                },
                comments,
                saved,
            });
        });
    }
    deletePostService(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postModel.deleteMany({ postId });
        });
    }
    addCommentToPostService(postId, userId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield this.postModel.findById(postId);
            console.log("PostIddddddd", postId);
            console.log("Posttttttt", post);
            if (!post) {
                throw new Error("Post not found");
            }
            post.comments.commentsMessages.push({
                userId: userId,
                message: message,
            });
            post.comments.commentsNumber += 1;
            return post;
        });
    }
}
exports.default = PostService;
