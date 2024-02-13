export declare class Token {
    private userModel;
    private tokenModel;
    createToken(payload: any, secretKey: string, accessExpire: string, refreshExpire: string, username?: string | null): Promise<{
        refreshToken: string;
        accessToken: string;
    }>;
}
