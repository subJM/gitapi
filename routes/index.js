var express = require('express');
var router = express.Router();

// saveLog 함수 가져오기
const saveLog = require('../utils/logger');
const sendMassage = require('../utils/telegram');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/test', function(req, res, next) {

//   const sendMessageUrl = `https://api.telegram.org/bot7148869581:AAESpzk-Gk-vBAyKgfr9aiyT5Nk13a21jdA/getUpdates`;

//   var result = axios.get(sendMessageUrl);
//   console.log('result');
//   console.log(result);
// });

router.post('/gitApiSaveLog', function(req, res, next){
  var postData = req.body;
  // 요청 본문을 문자열로 변환하여 로그에 저장
  const logMessage = JSON.stringify(postData);
  saveLog('<======================= gitApiSaveLog ==========================>');
  saveLog(logMessage);

  const data = postData.head_commit;
  const timestamp = new Date(data.timestamp);
  const message = `작성자: ${data.author.name}\n` +
                  `작성자 이메일: ${data.author.email}\n` +
                  `배포자: ${data.committer.name}\n` +
                  `배포자 이메일: ${data.committer.email}\n` +
                  `배포시간: ${timestamp}`;

  sendMassage(message);

});



module.exports = router;
