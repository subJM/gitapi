var express = require('express');
var router = express.Router();

// saveLog 함수 가져오기
var saveLog = require('../utils/logger');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next){
  saveLog('check');
  res.send('test');
});

router.post('/gitApiSaveLog', function(req, res, next){
  var postData = req.body;
  res.send(postData);
  saveLog(postData);
});



module.exports = router;
