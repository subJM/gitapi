const fs = require('fs');
const path = require('path');
const moment = require('moment-timezone');

function saveLog(message) {
  const date = moment().tz('Asia/Seoul');
  const formattedDate = date.format('YYYY-MM-DD');  //파일이름

  const logFileName = `${formattedDate}.log`;
  const logFilePath = path.join(__dirname, '../logs', logFileName);

  const timestamp = date.format(); // 로그 찍히는 시간

  const logMessage = `[${timestamp}] ${message}\n`; //메세지

  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('로그를 파일에 저장하는데 실패했습니다:', err);
    } else {
      console.log('로그가 성공적으로 저장되었습니다:', logMessage);
    }
  });
}

module.exports = saveLog;
