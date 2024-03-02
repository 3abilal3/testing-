const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'student'
});

pool.query('SELECT * from class', (error, results) => {
    if (error) throw error;
    console.log(results);
});

pool.getConnection((error, connection) => {
    if (error) throw new error
    if (connection) {
        connection.release();
    }
    return;
});
