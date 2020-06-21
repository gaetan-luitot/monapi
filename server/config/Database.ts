import mariadb from 'mariadb';
import util from 'util';

require('dotenv').config();

const con = mariadb.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    connectionLimit: 5, /** @Todo : Is it useful ? **/
});

export const query = util.promisify(con.query).bind(con);
