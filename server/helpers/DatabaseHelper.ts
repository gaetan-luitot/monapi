import { IOut } from '../interfaces/IOut';

export class DatabaseHelper {
    // Private :
    static async _makeReturn(info: string): Promise<IOut> {
        return { code: 500, success: false, info: info, data: null };
    }

    static async _switchErrno(errno: number, what: string, info: string): Promise<string> {
        switch (errno) {
            case 1062:
                return `This ${what} already exist.`;
            default:
                return `[Error] ${what}: ${info}.`;
        }
    }

    // Public :

    static async errorHandler (errno: number, what: string, info: string = ''): Promise<IOut> {
        return DatabaseHelper._makeReturn(
            await DatabaseHelper._switchErrno(errno, what, info)
        );
    }
}
