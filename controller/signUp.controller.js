const signUpService = require("../services/signUp.services");

const signUpController = async (req, res) => {
    const { username, password} = req.body;

    const signUp = await signUpService.insertUser(username, password);
    if(!signUp){
        return res.json({
            message: "Account Already Exists!!"
        });
    }
    return res.json({
        message: "Account Created Successfully!!"
    });
};

module.exports = {
    signUpController
}