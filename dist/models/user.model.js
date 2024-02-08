"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    followers: { type: Number },
    following: { type: Number },
    followRequest: { type: [String] },
    posts: { type: mongoose_1.Types.ObjectId, ref: "Post" },
    savedPost: { type: mongoose_1.Types.ObjectId, ref: "Post" },
}, {
    timestamps: true,
});
const userModel = (0, mongoose_1.model)("User", userSchema);
exports.default = userModel;
