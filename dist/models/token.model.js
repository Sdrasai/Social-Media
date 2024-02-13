"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const tokenSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    token: { type: String, required: true },
    loggedInAt: { type: Date, default: Date.now },
});
const tokenModel = (0, mongoose_1.model)("Token", tokenSchema);
exports.default = tokenModel;
//# sourceMappingURL=token.model.js.map