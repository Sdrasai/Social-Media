"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Types.ObjectId, ref: "User", required: true },
    mediaType: { type: String, enum: ["Picture", "Video"], default: "Picture" }, // Assuming mediaType can be either Picture or Video
    mediaUrl: { type: String, required: true },
    caption: { type: String },
    likes: {
        byUser: { type: [String], default: [] }, // Assuming byUser is an array of user IDs
        likesNumber: { type: Number, default: 0 },
    },
    comments: {
        byUser: { type: [String], default: [] }, // Assuming byUser is an array of user IDs
        commentsMessage: { type: [String], default: [] },
        commentsNumber: { type: Number, default: 0 },
    },
    saved: { type: Boolean, default: false },
}, {
    timestamps: true,
});
const PostModel = (0, mongoose_1.model)("Post", postSchema);
exports.default = PostModel;
