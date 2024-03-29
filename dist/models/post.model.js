"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Types.ObjectId, required: true },
    mediaType: { type: String, enum: ["Picture", "Video"], default: "Picture" },
    mediaUrl: { type: String, required: true },
    caption: { type: String },
    likes: {
        likesArray: [
            {
                byUser: { type: mongoose_1.Types.ObjectId, required: true },
                default: [],
            },
        ],
        likesNumber: { type: Number, default: 0 },
    },
    comments: {
        commentsMessages: [
            {
                message: String,
                byUser: { type: mongoose_1.Types.ObjectId, required: true },
                default: [],
            },
        ],
        commentsNumber: { type: Number, default: 0 },
    },
    saved: { type: Boolean, default: false },
}, {
    timestamps: true,
});
const PostModel = (0, mongoose_1.model)("Post", postSchema);
exports.default = PostModel;
//# sourceMappingURL=post.model.js.map