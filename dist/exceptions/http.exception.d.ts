export declare class HttpException extends Error {
    statusCode: number;
    message: string;
    constructor(statusCode: number, message: string);
}
