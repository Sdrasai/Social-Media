"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    image: { type: String, required: true },
    caption: { type: String },
    likes: { type: [String] },
    likesNumber: { type: Number },
    comments: { type: [String] },
    commentsNumber: { type: Number },
    commentsMessage: { type: String },
    saved: { type: Boolean },
});
const postModel = (0, mongoose_1.model)("Post", postSchema);
exports.default = postModel;
