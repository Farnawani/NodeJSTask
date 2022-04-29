const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "password",
    database: "TaskDB",
    host: "localhost",
    port: 5432
})

pool.connect(function (err) {
    if (err) {
        console.error(err.message);
    }
    console.log("Connected!");
});

module.exports = pool;