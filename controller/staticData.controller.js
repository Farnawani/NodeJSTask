const staticDataService = require("../services/staticData.services");

const staticDataController = (req, res) => {
    res.send(staticDataService.posts.filter(post => post.username === req.user.username));
};

module.exports = { staticDataController };