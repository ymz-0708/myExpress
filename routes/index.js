var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/test", function (req, res, next) {
  console.log(req);
  res.send({
      resultMsg: null,
      result: `好看不？，陈桔`,
      code: 200,
  });
});
module.exports = router;
