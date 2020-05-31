const config = require('../config/config');
const mysql = require('mysql');
const util = require('util');

//console.log(config);

const con = mysql.createConnection(config.dbConfig);

const query = util.promisify(con.query).bind(con);


module.exports = query;
