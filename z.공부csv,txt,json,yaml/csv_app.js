const fs = require('fs');
// csvtojson, json2csv 라이브러리를 설치.
const csv = require('csvtojson');
const { Parser } = require('json2csv');

// read csv파일
fs.readFile('csv_test.csv', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data, 'data');
});

const test = async () => {
  // load csv파일
  const cars = await csv().fromFile('csv_test.csv');
  // show csv파일
  console.log(cars, 'cars');

  // 쓰기 csv파일 //1997을 2020으로 변경.
  cars[0].Year = 2020;
  // csv파일 저장
  const carsInCsv = new Parser({ fields: ['Year', 'Make', 'Model', 'Length'] }).parse(cars);
  fs.writeFileSync('csv_test.csv', carsInCsv);
};
test();
