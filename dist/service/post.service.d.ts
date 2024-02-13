/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { IPostData } from "../interface/post.interface";
import { Types } from "mongoose";
declare class PostService {
    private postModel;
    createPostService(userId: Types.ObjectId, mediaType: string, mediaUrl: string, caption?: string, likesByUser?: string[], comments?: Partial<IPostData["comments"]>, saved?: boolean): Promise<(import("mongoose").Document<unknown, {}, IPostData> & IPostData & {
        _id: Types.ObjectId;
    }) | undefined>;
    findAllPostService(): Promise<(import("mongoose").Document<unknown, {}, IPostData> & IPostData & {
        _id: Types.ObjectId;
    })[]>;
    findOnePostService(postId: string): Promise<(import("mongoose").Document<unknown, {}, IPostData> & IPostData & {
        _id: Types.ObjectId;
    }) | null>;
    updatePostService(postId: string, caption?: string, likesByUser?: string[], comments?: Partial<IPostData["comments"]>, saved?: boolean): Promise<(import("mongoose").Document<unknown, {}, IPostData> & IPostData & {
        _id: Types.ObjectId;
    }) | null>;
    deletePostService(postId: string): Promise<import("mongodb").DeleteResult>;
    addCommentToPostService(postId: string, userId: string, message: string): Promise<(import("mongoose").Document<unknown, {}, IPostData> & IPostData & {
        _id: Types.ObjectId;
    }) | null>;
}
export default PostService;
