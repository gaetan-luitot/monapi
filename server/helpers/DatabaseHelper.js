const config = require('../config/config');
const mysql = require('mysql');
const util = require('util');

//console.log(config);
// const query =


class Database {
    // Private :
    static _makeReturn(info) {
        return { success: false, error: info, data: null };
    }

    static _switchErrno(errno, what, info) {
        switch (errno) {
            case 1062:
                return `This ${what} already exist.`;
            default:
                return `[Error] ${what}: ${info}.`;
        }
    }

    // Public :

    static errorHandler (errno, what, info = '') {
        return Database._makeReturn(
            Database._switchErrno(errno, what, info)
        );
    }

    static _con = mysql.createConnection(config.dbConfig);
    static db = util.promisify(Database._con.query).bind(Database._con);
}

module.exports = Database;
