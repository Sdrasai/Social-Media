import { IRoute } from "./interface/route.interface";
declare class App {
    private app;
    port: any;
    constructor(routes: IRoute[]);
    listen(): void;
    private dbConnection;
    private setupMiddlewares;
    private setupRoutes;
    private errorHandler;
}
export default App;
