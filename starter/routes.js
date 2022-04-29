const signUpRouter = require("../routes/signUp.routes");
const signInRouter = require("../routes/signIn.routes");
const staticDataRouter = require("../routes/staticData.routes");

module.exports = (app) => {
    app.use("/signup", signUpRouter);
    app.use("/logIn", signInRouter);
    app.use("/posts", staticDataRouter);
}