"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const http_exception_1 = require("../exceptions/http.exception");
const validationMiddleware = (type, value = "body", skipMissingProperties = false, whitelist = true, forbidNonWhitelisted = true) => {
    return (req, res, next) => {
        (0, class_validator_1.validate)((0, class_transformer_1.plainToClass)(type, req[value]), {
            skipMissingProperties,
            whitelist,
            forbidNonWhitelisted,
        }).then((errors) => {
            const message = errors
                .map((error) => {
                if (error && error.constraints) {
                    return Object.values(error.constraints);
                }
                return [];
            })
                .join(", ");
            if (message) {
                next(new http_exception_1.HttpException(400, message));
            }
            else {
                next();
            }
        });
    };
};
exports.default = validationMiddleware;
//# sourceMappingURL=validation.middleware.js.map