require("dotenv").config()

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const pool = require("./db");
const bcrypt = require("bcrypt");
// const bodyParser = require("body-parser");
app.use(express.json());

require("./starter/routes")(app);


// const posts = [
//     {
//         username: "farna",
//         post: "post 1"
//     },
//     {
//         username: "bessya",
//         post: "post 3"
//     },
//     {
//         username: "samra",
//         post: "post 4"
//     },
//     {
//         username: "samra",
//         post: "post 11"
//     },
//     {
//         username: "samra",
//         post: "post 20"
//     },
//     {
//         username: "bessya",
//         post: "post 2"
//     }
// ];

// app.get("/posts", authenticateToken, (req, res) => {
//     res.send(posts.filter(post => post.username === req.user.username));
// });

// app.post("/signup", async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         // const jwtUser = { username: username, password: password };
//         // const user = await pool.query(
//         //     "SELECT username FROM users WHERE username=($1)",
//         //     [username]
//         // );
//         // if (user.rows.length != 0 && user.rows[0].username == jwtUser.username) {
//         //     return res.send("User Already Exists!");
//         // }

//         // const accessToken = jwt.sign(jwtUser, process.env.ACCESS_TOKEN_SECRET);

//         // const salt = await bcrypt.genSalt(10);
//         // const hashedPassword = await bcrypt.hash(password, salt);
//         // console.log("helllooooooo");

//         // const newUser = await pool.query(
//         //     "INSERT INTO users (username, password, bearertoken) VALUES ($1, $2, $3) RETURNING (username, bearertoken)",
//         //     [username, hashedPassword, accessToken]
//         // );
//         console.log(newUser);
//         // return res.json({
//         //     message: "Account Created Successfully!!",
//         //     bearertoken: `${accessToken}`,
//         // });
//     } catch (err) {
//         console.error(err.message);
//     }
// });

// app.post("/login", async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         // const getUser = await pool.query(
//         //     "SELECT * FROM users WHERE username=($1)",
//         //     [username]
//         // );

//         // if (getUser.rows.length == 0) return res.status(404).send("User Not Found!!");

//         // const validHashedPassword = await bcrypt.compare(password, getUser.rows[0].password);

//         // if (!validHashedPassword) return res.status(404).send("Incorrect Username or Password!!");
//         // console.log(getUser);

        
//     } catch (err) {
//         console.error(err.message);
//     }
// });

// function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(" ")[1];

//     if (token == null) return res.sendStatus(401);

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         if (err) return res.sendStatus(403);
//         req.user = user;
//         next();
//     });
// }

app.listen(3000, () => {
    console.log("Server Listening on port 3000");
});