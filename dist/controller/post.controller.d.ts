import { NextFunction, Request, Response } from "express";
declare class PostController {
    private postService;
    createPost(req: Request, res: Response, next: NextFunction): Promise<void>;
    getAllPost(req: Request, res: Response, next: NextFunction): Promise<void>;
    findOnePost(req: Request, res: Response, next: NextFunction): Promise<void>;
    updatePost(req: Request, res: Response, next: NextFunction): Promise<void>;
    deletePost(req: Request, res: Response, next: NextFunction): Promise<void>;
    addCommentToPost(req: Request, res: Response, next: NextFunction): Promise<void>;
    likePost(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export default PostController;
