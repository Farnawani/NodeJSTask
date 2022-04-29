const signInService = require("../services/signIn.services");

const signInController = async (req, res) => {
    const { username, password } = req.body;

    const logIn = await signInService.checkUser(username, password);

    if(logIn == 0){
        return res.status(404).send("User Not Found!!")
    }
    else if(logIn == 1){
        return res.status(404).send("Incorrect Username or Password!!")
    }
    else{
        return res.json({ message: "You Have Logged In Successfully!!", userInfo: logIn });
    }
}

module.exports = {
    signInController
}
