const mysql = require('mysql');

const dbCon = mysql.createPool({
    connectionLimit : 10,
    host: "localhost",
    user: "root",
    password: "root",
    database: "techschema"
});

module.exports = dbCon;
