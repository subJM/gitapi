
const fs = require('fs');
const path = require('path');
// 로그 메시지를 저장하는 함수
function saveLog(message) {
  // 현재 날짜를 YYYY-MM-DD 형식으로 포맷
  const date = new Date();
  const formattedDate = date.toISOString().split('T')[0];

  // 로그 파일 경로 생성 (예: logs/2023-03-28.log)
  const logFileName = `${formattedDate}.log`;
  const logFilePath = path.join(__dirname, '../logs', logFileName);

  // 로그 메시지에 타임스탬프 추가
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;

  // 파일에 로그 메시지 추가 (파일이 없으면 생성)
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('로그를 파일에 저장하는데 실패했습니다:', err);
    } else {
      console.log('로그가 성공적으로 저장되었습니다:', logMessage);
    }
  });
}

module.exports = saveLog;