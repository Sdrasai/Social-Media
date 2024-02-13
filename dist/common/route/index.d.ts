import { IRoute } from "../../interface/route.interface";
declare class Route implements IRoute {
    prefix: any;
    router: import("express-serve-static-core").Router;
    ControllerClass: any;
    controller: any;
    constructor(Controller: any);
    private setupRoutes;
}
export default Route;
