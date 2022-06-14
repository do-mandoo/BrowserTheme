const $timeBtnWrap = document.querySelector('.time_btn_wrap');
const $startBtn = document.querySelector('.start_btn');

const $restBtnWrap = document.querySelector('.res_btn_wrap');
const $restStartBtn = document.querySelector('.rest_start_btn');

const $pomodoroTimerNumber = document.querySelector('.pomodoro_timer_number');
const $restTimerNumber = document.querySelector('.rest_timer_number');

let pomodoroTimer = 3; // 25분*60초 = 1500초. 2초가 딜레이되서 1498초?->log지우면 1초단축됨.1499초
let pomodoroRestTimer = 2; // 5분*60초 = 300초. 마찬가지로 298초?
let pomodoroInterval;
let restPomoInterval;
let pomoSetTime;
let restSetTime;
let i = 0;

// 뽀모도로 타이머
export const setIntervalExamplePomo = (time, $timeNum) => {
  // console.log(time, $timeNum, 'a94irj');
  const pomoStartTimer = (time, $timeNum) => {
    pomodoroInterval = setInterval(
      () => {
        // 0이하로 안내려가게.
        if (time >= 0) {
          // console.log(time, $timeNum, 'asdas');
          // String.prototype.padStart() 메서드는 현재 문자열의 시작을 다른 문자열로 채워,
          // 주어진 길이를 만족하는 새로운 문자열을 반환한다.
          // str.padStart(targetLength,[, padString])
          // const str1 = '5';
          // console.log(str1.padStart(2,'0')); // '05'
          // => 길이를 2로 해서 시작을 0으로 채움.
          const minutes = String(Math.floor(time / 60)).padStart(2, '0');
          const seconds = String(Math.floor(time % 60)).padStart(2, '0');
          time -= 1;
          $timeNum.textContent = `${minutes}` + ':' + `${seconds}`;
          console.log(minutes, 'minutes');
          // console.log(String(Math.floor(300 % 60)).padStart(2, '0'), '이거뭔지');
        } else {
          clearInterval(pomodoroInterval);
          console.log('end');
        }
      },
      1000,
      time,
      $timeNum
    );
  };

  // 쉬는시간 타이머
  const restStartTimer = (time, $timeNum) => {
    restPomoInterval = setInterval(
      () => {
        if (time >= 0) {
          const minutes = String(Math.floor(time / 60)).padStart(2, '0');
          const seconds = String(Math.floor(time % 60)).padStart(2, '0');
          time -= 1;
          $timeNum.textContent = `${minutes}` + ':' + `${seconds}`;
          console.log(minutes, 'minutes');
        } else {
          clearInterval(restPomoInterval);
          console.log('end');
        }
      },
      1000,
      time,
      $timeNum
    );
  };
  // // while문 굳이 stop안누르면 두 개. 알고리즘적인. 무한루프. stop눌렀을때만 break.

  // setinterval 간단동작
  $timeBtnWrap.onclick = e => {
    if (!e.target.matches('.time_btn_wrap>button')) return;
    let y = 0;
    let intr = setInterval(() => {
      console.log('확인확인');
      if (++y === 5) clearInterval(intr);
    }, 1000);
  };

  /* $timeBtnWrap.onclick = e => {
    if (!e.target.matches('.time_btn_wrap>button')) return;
    console.log(2039);
    console.log(e.target.textContent.toLowerCase() === 'start');
    console.log('되냐');
    // if ($startBtn.textContent.toLowerCase() === 'start') {
    console.log('di');
    pomoStartTimer(pomodoroTimer, $pomodoroTimerNumber);
    $startBtn.textContent = 'stop'.toUpperCase();
    pomoSetTime = setTimeout(() => {
      restStartTimer(pomodoroRestTimer, $restTimerNumber);
      pomodoroTimer = 4;
      $pomodoroTimerNumber.textContent = '25:00';
      $startBtn.textContent = 'start'.toUpperCase();
    }, (pomodoroTimer + 1) * 1000);
    // }
    console.log(i, 'i');
    if (i === 3) {
      console.log('브레이크');
      clearInterval(pomodoroInterval);
      clearTimeout(pomoSetTime);
      // break;
    }
    // else if (e.target.textContent.toLowerCase() === 'stop') {
    //   console.log('뭐');
    //   pomodoroTimer = 4;
    //   $pomodoroTimerNumber.textContent = '25:00';
    //   $startBtn.textContent = 'start'.toUpperCase();
    //   clearInterval(pomodoroInterval);
    //   clearTimeout(pomoSetTime);
    // }
  }; */

  $restBtnWrap.onclick = e => {
    if (!e.target.matches('.res_btn_wrap>button')) return;
    if (e.target === $restStartBtn) {
      if ($restStartBtn.textContent.toLowerCase() === 'start') {
        restStartTimer(pomodoroRestTimer, $restTimerNumber);
        $restStartBtn.textContent = 'stop'.toUpperCase();
        restSetTime = setTimeout(() => {
          // clearTimeout(restSetTime);
          pomoStartTimer(pomodoroTimer, $pomodoroTimerNumber);
          pomodoroRestTimer = 4;
          $restTimerNumber.textContent = '25:00';
          $restStartBtn.textContent = 'start'.toUpperCase();
        }, (pomodoroRestTimer + 1) * 1000);
      } else if (e.target.textContent.toLowerCase() === 'stop') {
        pomodoroRestTimer = 2;
        $restTimerNumber.textContent = '05:00';
        $restStartBtn.textContent = 'start'.toUpperCase();
        clearInterval(restPomoInterval);
        clearTimeout(restSetTime);
      }
    }
  };
};
