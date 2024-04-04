const axios = require('axios');
const saveLog = require('./logger');

const chatId = '2131291509';
const telegramToken = '7148869581:AAESpzk-Gk-vBAyKgfr9aiyT5Nk13a21jdA';

// 로그 메시지를 저장하는 함수
function sendMassage(message) {
  axios.post(`https://api.telegram.org/bot${telegramToken}/sendMessage`, { 
    chat_id: chatId,
    text: message,
  })
  .then(response => {
    saveLog('메시지가 성공적으로 전송되었습니다 : '+ JSON.stringify(response.data));
  })
  .catch(error => {
    saveLog('메시지 전송에 실패하였습니다 : '+ JSON.stringify(error));
  });
}

module.exports = sendMassage;