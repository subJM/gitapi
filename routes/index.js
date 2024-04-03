var express = require('express');
var router = express.Router();

// saveLog 함수 가져오기
var saveLog = require('../utils/logger');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/gitApiSaveLog', function(req, res, next){
  console.log('왜 안들어와');
  saveLog('들어오긴 했어');
  saveLog(req);
  var postData = req.body;
  // 요청 본문을 문자열로 변환하여 로그에 저장
  var logMessage = JSON.stringify(postData);
  saveLog(logMessage);
  console.log(logMessage);
  // 클라이언트에게 요청 본문 그대로 응답
  res.send(postData);
});



module.exports = router;
