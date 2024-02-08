"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    followers: { type: Number, default: 0 },
    following: { type: Number, default: 0 },
    followRequest: { type: [String] },
    posts: { type: mongoose_1.Types.ObjectId, ref: "Post", default: [] },
    savedPost: { type: mongoose_1.Types.ObjectId, ref: "Post", default: [] },
}, {
    timestamps: true,
});
const userModel = (0, mongoose_1.model)("User", exports.userSchema);
exports.default = userModel;
