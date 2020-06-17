export class DatabaseHelper {
    // Private :
    static _makeReturn(info: string) {
        return { success: false, error: info, data: null };
    }

    static _switchErrno(errno: number, what: string, info: string) {
        switch (errno) {
            case 1062:
                return `This ${what} already exist.`;
            default:
                return `[Error] ${what}: ${info}.`;
        }
    }

    // Public :

    static errorHandler (errno: number, what: string, info: string = '') {
        return DatabaseHelper._makeReturn(
            DatabaseHelper._switchErrno(errno, what, info)
        );
    }
}
