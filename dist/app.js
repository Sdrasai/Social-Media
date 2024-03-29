"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_exception_1 = require("./exceptions/http.exception");
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class App {
    constructor(routes) {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.dbConnection();
        this.setupMiddlewares();
        this.setupRoutes(routes);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield mongoose_1.default.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
                console.log("Connected to DB...");
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    setupMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    setupRoutes(routes) {
        routes.forEach((route) => {
            this.app.use(route.prefix, route.router);
        });
    }
    errorHandler() {
        this.app.use((err, req, res, next) => {
            if (err instanceof http_exception_1.HttpException) {
                return res.status(err.statusCode).send(err.message);
            }
            return res.send(err.message);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map