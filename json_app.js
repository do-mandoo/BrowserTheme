const fs = require('fs');

// book_app.json 파일 최초 생성
let obj = {
  books: [{ title: 'COSMOS', author: 'Carl Sagan' }],
};
let booksJSON = JSON.stringify(obj);
fs.writeFileSync('book_app.json', booksJSON);
/* 위 코드와 결과 같음.
fs.writeFile('book_app.json', booksJSON, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data, 'data');
}); */

// ------------------------------------------
// 1읽기
// const readData = fs.readFileSync('book_app.json');
// const dataJSON = readData.toString();
// console.log(dataJSON, 'data');
// 2읽기
fs.readFile('book_app.json', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data, 'data');
});

// -------------------------------------
// 쓰기
fs.readFile('book_app.json', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    obj = JSON.parse(data);
    obj.books.push({ title: 'Progrsssammer, think of it as math', author: 'Yuki Hiroshi' });
    booksJSON = JSON.stringify(obj);
    fs.writeFile('book_app.json', booksJSON, err => {
      if (err) throw err;
    });
  }
  console.log(data, 'dataa');
});
