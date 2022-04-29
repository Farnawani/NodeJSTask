require("dotenv").config()

const pool = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const insertUser = async (username, password) => {
    const jwtUser = { username, password };
    const user = await pool.query(
        "SELECT username FROM users WHERE username=($1)",
        [username]
    );
    if (user.rows.length != 0 && user.rows[0].username == jwtUser.username) {
        return false;
    }

    const accessToken = jwt.sign(jwtUser, process.env.ACCESS_TOKEN_SECRET);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await pool.query(
        "INSERT INTO users (username, password, bearertoken) VALUES ($1, $2, $3) RETURNING (username, bearertoken)",
        [username, hashedPassword, accessToken]
    );
    return {newUser, accessToken};
};

module.exports = {
    insertUser
}