const pool = require("../db");
const bcrypt = require("bcrypt");

const checkUser = async (username, password) => {
    const getUser = await pool.query(
        "SELECT * FROM users WHERE username=($1)",
        [username]
    );

    if (getUser.rows.length == 0) return 0;

    const validHashedPassword = await bcrypt.compare(password, getUser.rows[0].password);

    if (!validHashedPassword) return 1;

    return getUser.rows[0];
}

module.exports = {
    checkUser
}