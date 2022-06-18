const $timeBtnWrap = document.querySelector('.time_btn_wrap');
const $startBtn = document.querySelector('.start_btn');
const $stopBtn = document.querySelector('.pomo_stop_btn');

const $restBtnWrap = document.querySelector('.res_btn_wrap');
const $restStartBtn = document.querySelector('.rest_start_btn');

const $pomodoroTimerNumber = document.querySelector('.pomodoro_timer_number');
const $restTimerNumber = document.querySelector('.rest_timer_number');

const $pomoCount = document.querySelector('.pomo_count');
const $restCount = document.querySelector('.rest_count');

let pomodoroTimer = 3; // 25분*60초 = 1500초. 2초가 딜레이되서 1498초?->log지우면 1초단축됨.1499초
let pomodoroRestTimer = 2; // 5분*60초 = 300초. 마찬가지로 298초?
let pomodoroInterval;
let restPomoInterval;
let pomoSetTime;
let restSetTime;

export const test1 = e => {
  console.log(1);
  $startBtn.onclick = e => {
    console.log(2);
    if (pomodoroTimer) {
      console.log(3);
      pomoSetTime = setInterval(timer, 1000);
      console.log(4);
    } else {
      console.log('오류');
    }
  };
  $stopBtn.onclick = e => {
    clearInterval(pomoSetTime);
  };
  let pomoCountNum = Number($pomoCount.textContent);
  let restCountNum = Number($restCount.textContent);
  function timer() {
    //Work Timer Countdown
    if (pomodoroTimer >= 0) {
      console.log(pomodoroTimer, '숫자봐');
      const minutes = String(Math.floor(pomodoroTimer / 60)).padStart(2, '0');
      const seconds = String(Math.floor(pomodoroTimer % 60)).padStart(2, '0');
      pomodoroTimer -= 1;
      $pomodoroTimerNumber.textContent = `${minutes}` + ':' + `${seconds}`;
    } else if (pomodoroTimer < 0 && pomodoroRestTimer >= 0) {
      console.log(pomodoroRestTimer, 'g히히');
      const minutes = String(Math.floor(pomodoroRestTimer / 60)).padStart(2, '0');
      const seconds = String(Math.floor(pomodoroRestTimer % 60)).padStart(2, '0');
      pomodoroRestTimer -= 1;
      $restTimerNumber.textContent = `${minutes}` + ':' + `${seconds}`;
    } else if (pomodoroTimer < 0 && pomodoroRestTimer < 0) {
      pomodoroTimer = 3;
      pomodoroRestTimer = 2;
      $pomodoroTimerNumber.textContent = '25:00';
      $restTimerNumber.textContent = '05:00';

      $pomoCount.textContent = pomoCountNum + 1;
      $restCount.textContent = restCountNum + 1;
    }
  }
};
