var express = require(`express`);
var router = express.Router();

router.get(`/`, function(req, res, next) {
    res.send(`Chinekwes APIs are working properly`);
});

module.exports = router;