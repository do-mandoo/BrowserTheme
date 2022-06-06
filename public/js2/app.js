const $startBtn = document.querySelector('.start_btn');
const $stopBtn = document.querySelector('.stop_btn');
const $resetBtn = document.querySelector('.reset_btn');
const $restStartBtn = document.querySelector('.rest_start_btn');
const $restStopBtn = document.querySelector('.rest_stop_btn');
const $hourText = document.querySelector('.hour_text');
const $minuteText = document.querySelector('.minute_text');
const $secondText = document.querySelector('.second_text');
const $pomodoroTimerNumber = document.querySelector('.pomodoro_timer_number');

let pomodoroTimer = 1500; // 25분*60초 = 1500초
let pomodoroRestTimer = 300; // 5분*60초 = 300초
let pomodoroInterval;
let restPomoInterval;

const startTimer = () => {
  pomoInterval = setInterval(() => {
    // String.prototype.padStart() 메서드는 현재 문자열의 시작을 다른 문자열로 채워,
    // 주어진 길이를 만족하는 새로운 문자열을 반환한다.
    // str.padStart(targetLength,[, padString])
    // const str1 = '5';
    // console.log(str1.padStart(2,'0')); // '05'
    // => 길이를 2로 해서 시작을 0으로 채움.
    const minutes = String(Math.floor(pomodoroTimer / 60)).padStart(2, '0');
    const seconds = String(Math.floor(pomodoroTimer % 60)).padStart(2, '0');
    pomodoroTimer -= 1;
    $pomodoroTimerNumber.textContent = `${minutes}` + ':' + `${seconds}`;
    console.log(minutes, 'minutes');
  }, 1000);
};

$startBtn.onclick = () => {
  console.log('타이머시작');
  startTimer();
};
$stopBtn.onclick = () => {
  console.log('stopCilck');
  clearInterval(pomoInterval);
};
$resetBtn.onclick = () => {
  pomodoroTimer = 1500;
  $pomodoroTimerNumber.textContent = '25:00';
  console.log('리셋!');
};
//
// const startRestTimer = () => {
//   console.log('startRest');
//   var timeY = setInterval(function () {
//     console.log(pomodoroRestTimer, '마이너스전');
//     pomodoroRestTimer--;
//     console.log(pomodoroRestTimer, '마이너스후');
//   }, 1000);
//   console.log(timeY, 'timeY');
// };
// $restStartBtn.onclick = () => {
//   console.log('restStart');
//   startRestTimer();
// };
// $restStopBtn.onclick = () => {
//   console.log('stopREst');
//   clearInterval(timeY);
// };
