var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
    console.log(req);
    res.send({
        resultMsg: null,
        result: `${req.query.value}`,
        code: 200,
    });
});

router.get("/id", function (req, res, next) {
    res.send({
        resultMsg: "客户端请求失败",
        result: "客户端请求失败",
        code: 500,
    });
});

module.exports = router;
