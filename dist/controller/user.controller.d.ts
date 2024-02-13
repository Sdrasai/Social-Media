import { NextFunction, Request, Response } from "express";
declare class UserController {
    private userService;
    private hash;
    private tokenClass;
    createUsers(req: Request, res: Response, next: NextFunction): Promise<void>;
    getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void>;
    findOneUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    updateUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    login(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
export default UserController;
