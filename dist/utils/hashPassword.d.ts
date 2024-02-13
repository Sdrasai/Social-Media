export declare class Hash {
    hashingPassword(password: string): Promise<string>;
    comparingPassword(password: string, checkedPassword: string): Promise<boolean>;
}
