import { IOut } from '../dtos/IOut';

export class DatabaseHelper {
    // Private :
    static async _makeReturn(info: string): Promise<IOut> {
        return { code: 500, success: false, info: info, data: null };
    }

    static async _switchErrno(errno: number, what: string, info: string): Promise<string> {
        switch (errno) {
            case 1052:
                console.log('Ambigous field defined in query.')
                return `A database error occured.`;
            case 1062:
                return `This ${what} already exist.`;
            case 1452:
                return `Can't apply foreign key constraint.`;
            default:
                console.log(info);
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
