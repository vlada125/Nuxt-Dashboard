const { createPool } = require("mysql");

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
    port: 3306


});

module.exports = pool;