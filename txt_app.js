const fs = require('fs');

// // 읽기 부분
// fs.readFile('txt_test.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data, 'data');
// });

// // 전체수정 부분
// const content1 = 'www';
// fs.writeFile('txt_test.txt', content1, err => {
//   if (err) {
//     console.err;
//     return;
//   }
// });

// 원래 텍스트에 추가하기 부분
const content2 = ' hello hi';
fs.appendFile('txt_test.txt', content2, err => {
  if (err) {
    console.err;
    return;
  }
});

// node.js로 동작하기 때문에, node.js설치되어있는지 확인하고
// 터미널에서 node app.js를 입력하면 결과가 바뀌거나,
// 콘솔을 찍었다면 결과가 나온다.
