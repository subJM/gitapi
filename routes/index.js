var express = require('express');
var router = express.Router();

const axios = require('axios');

// saveLog 함수 가져오기
const saveLog = require('../utils/logger');

const chatId = '2131291509';
const telegramToken = '7148869581:AAESpzk-Gk-vBAyKgfr9aiyT5Nk13a21jdA';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test', function(req, res, next) {

  const sendMessageUrl = `https://api.telegram.org/bot7148869581:AAESpzk-Gk-vBAyKgfr9aiyT5Nk13a21jdA/getUpdates`;

  var result = axios.get(sendMessageUrl);
  console.log('result');
  console.log(result);
});

router.post('/gitApiSaveLog', function(req, res, next){
  var postData = req.body;
  // 요청 본문을 문자열로 변환하여 로그에 저장
  var logMessage = JSON.stringify(postData);
  saveLog('<======================= gitApiSaveLog ==========================>');
  saveLog(logMessage.head_commit);
  saveLog('전체 데이터');
  saveLog(logMessage);

  const data = logMessage.head_commit;
  const message = `작성자: ${data.author.name}\n` +
                  `작성자 이메일: ${data.author.email}\n` +
                  `배포자: ${data.committer.name}\n` +
                  `배포자 이메일: ${data.committer.email}\n` +
                  `배포시간: ${data.timestamp}`;

  console.log((message));

  axios.post(`https://api.telegram.org/bot${telegramToken}/sendMessage`, { 
    chat_id: chatId,
    text: message,
  })
  .then(response => {
    console.log('메시지가 성공적으로 전송되었습니다:', response.data);
    res.send(response.data);
  })
  .catch(error => {
    console.error('메시지 전송에 실패하였습니다:', error);
    res.send(error);
  });

  // // 클라이언트에게 요청 본문 그대로 응답
  // res.send(logMessage);
});



module.exports = router;
