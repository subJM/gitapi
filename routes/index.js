var express = require('express');
var router = express.Router();

const axios = require('axios');

// saveLog 함수 가져오기
var saveLog = require('../utils/logger');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test', function(req, res, next) {
  saveLog('네트웍 테스트용');
});

router.post('/gitApiSaveLog', function(req, res, next){
  var postData = req.body;
  // 요청 본문을 문자열로 변환하여 로그에 저장
  var logMessage = JSON.stringify(postData);
  saveLog('<======================= gitApiSaveLog ==========================>');
  saveLog(logMessage.head_commit);
  saveLog('전체 데이터');
  saveLog(logMessage);

  console.log(logMessage);

  const data = logMessage.head_commit;

  const message = {
    '작성자' : data.author.name,
    '작성자 이메일' : data.author.email,
    '배포자' : data.committer.name,
    '배포자 이메일' : data.committer.email,
    '배포시간' : data.timestamp
  }

  const chatId = '29833358';
  const telegramToken = '7148869581:AAESpzk-Gk-vBAyKgfr9aiyT5Nk13a21jdA';

  const sendMessageUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;


  // 클라이언트에게 요청 본문 그대로 응답
  res.send(postData);
});



module.exports = router;
