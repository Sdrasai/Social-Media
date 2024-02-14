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
const mongodb_1 = require("mongodb");
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
            console.log(postId);
            return yield this.postModel.findById(new mongodb_1.ObjectId(postId));
        });
    }
    updatePostService(postId, caption, likesByUser, comments, saved) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedPost = yield this.postModel.findByIdAndUpdate({ _id: new mongodb_1.ObjectId(postId) }, {
                caption,
                likes: {
                    byUser: likesByUser,
                    likesNumber: 0,
                },
                comments,
                saved,
            }, { new: true });
            return updatedPost;
        });
    }
    deletePostService(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postModel.findByIdAndDelete(new mongodb_1.ObjectId(postId));
        });
    }
    addCommentToPostService(postId, userId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield this.postModel.findById(new mongodb_1.ObjectId(postId));
            console.log("PostIddddddd", postId);
            console.log("Posttttttt", post);
            if (!post) {
                throw new Error("Post not found");
            }
            const updatedPost = yield this.postModel.findOneAndUpdate({ _id: new mongodb_1.ObjectId(postId) }, {
                $push: {
                    "comments.commentsMessages": {
                        userId: userId,
                        message: message,
                    },
                },
                $inc: { "comments.commentsNumber": 1 },
            }, { new: true });
            return updatedPost;
        });
    }
    likePostService(postId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield this.postModel.findById(new mongodb_1.ObjectId(postId));
            console.log(postId);
            if (!post) {
                throw new Error("Post not found");
            }
            const likedPost = yield this.postModel.findOneAndUpdate({ _id: new mongodb_1.ObjectId(postId) }, {
                $push: { "likes.likesArray": { byUser: userId } },
                $inc: { "likes.likesNumber": 1 },
            }, { new: true });
            return likedPost;
        });
    }
}
exports.default = PostService;
//# sourceMappingURL=post.service.js.map