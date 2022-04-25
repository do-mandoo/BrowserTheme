// splice
const spliceArr1 = [1, 2, 3, 4];
const spliceArr2 = [1, 2, 3, 4];
const spliceArr3 = [1, 2, 3, 4];
const spliceArr4 = [1, 2, 3, 4];
const spliceArr5 = [1, 2, 3, 4];
const spliceArr6 = [1, 2, 3, 1, 2];

const result1 = spliceArr1.splice(1); // 2,3,4
console.log(result1);
const result2 = spliceArr2.splice(-2); // 3,4
console.log(result2);
const result3 = spliceArr3.splice(-1); // 4
console.log(result3);
const result4 = spliceArr4.splice(1,2,20,30); // 1,20,30,4
console.log(result4);
const result5 = spliceArr5.splice(1,0,100) // 1,100,2,3,4
console.log(result5);

// 배열의 특정 요소 제거는 indexOf메서드를 통해 특정 요소의 인덱스를 취득한 다음 splice메서드를 사용
function remove(arr, item){
  // 제거할 item의 인덱스를 취득.
  const index = arr.indexOf(item);
  // 만약 제거할 item요소가 있으면 제거.
  if(index !== -1) arr.splice(index,1)
  return arr;
}2
console.log(remove(spliceArr6, 2)); // 1,3,1,2
console.log(remove(spliceArr6, 10)); // 1,3,1,2

console.log(spliceArr1); // 1
console.log(spliceArr2); // 1,2
console.log(spliceArr3); // 1,2,3
console.log(spliceArr4); // 1,20,30,4
console.log(spliceArr5); // 1,100,2,3,4

//--------------------------------------
// floor
// 소수점 이하를 내림한 정수를 반환. <->ceil
Math.floor(1.9) // 1
Math.floor(9.1) // 9 
Math.floor(-1.9) // -2 
Math.floor(-9.1) // -10
Math.floor(1) // 1
// console.log(Math.floor(1+1)) // 2
Math.floor() // NaN

// random
// 임이의 난수를반환. 0에서1미만의 실수. 0은 포함되지만 1은 포함되지 않는다.
Math.random(); // 0에서 1미만의 랜덤 실수(0.83928858199183884)

const random = Math.random();

const randomResult = Math.floor(random*10)+1;
console.log(randomResult); // 1에서 10사이의 정수. // 7

// randomResult 분해해서 이해하기. 
console.log(random); // 0.6609570298759428
console.log(random*10); // 6.6095702987594285

console.log(Math.floor(random)); // 0
console.log(Math.floor(random)+1); // 1
