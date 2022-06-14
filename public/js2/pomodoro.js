// ========== 뽀모도로 =====================================
const $timeBtnWrap = document.querySelector('.time_btn_wrap');
const $loopBtn = document.querySelector('.loop_btn');
const $startBtn = document.querySelector('.start_btn');
const $stopBtn = document.querySelector('.pomo_stop_btn');

const $pomoCount = document.querySelector('.pomo_count');

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
let pomoNum = 0;
let restNum = 0;

export const pomoRestTimerWrap = () => {
  // 뽀모도로 타이머
  const pomoStartTimer = (time, $timeNum) => {
    // console.log(time, $timeNum, 'a94irj');

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
  // while문 굳이 stop안누르면 두 개. 알고리즘적인. 무한루프. stop눌렀을때만 break.
  // const loopStation = e => {
  // $loopBtn.onclick = e => {
  //   if (!e.target.matches('.time_btn_wrap>button')) return;
  //   // let j = 0;
  //   // while (j < 5) {
  //   //   (function (j) {
  //   //     setTimeout(() => {
  //   //       console.log('while과 function..', j);
  //   //     }, 1000);
  //   //   })((j = j + 1));
  //   // }
  //   const intro = setInterval(() => {
  //     // while (i < 5) {
  //     //   console.log('while아 돌아라');
  //     //   pomoStartTimer(pomodoroTimer, $pomodoroTimerNumber);
  //     //   if (i === 4) {
  //     //     console.log('while아 멈춰라');
  //     //     clearInterval(intro);
  //     //     break;
  //     //   }
  //     //   i = i + 1;
  //     // }
  //   }, pomodoroTimer + restStartTimer);
  // };
  // // loopStation();

  // const whileLoop = e => {
  $timeBtnWrap.onclick = e => {
    if (!e.target.matches('.time_btn_wrap>button')) return;
    console.log('루프버튼');
    while (i < 5) {
      // (() => {
      //   console.log(i, 'i');
      //   console.log('he');
      //   const intr = setTimeout(() => {
      //     $pomoCount.textContent = i;
      //     console.log('hi');
      //   }, 1000);
      // })((i = i + 1));
      if (i === 3) {
        console.log('sieo');
      } else break;
      i = i + 1;
      //  else if ($stopBtn.onclick) {
      //   clearTimeout(intr);
      //   break;
      // } else if (i === 3) {
      //   console.log('여기서멈추나');
      //   break;
      // }
    }
  };
  // i = i + 1;

  //   if(i<3){
  //   // console.log($startBtn.classList[1] === 'start_btn', '클래스리스트');
  //   // if (e.target.classList === 'start_btn') {
  //   console.log('hohoo');

  //   // console.log(e.target.textContent, '야ㅑㅑㅑ');
  //   pomoStartTimer(pomodoroTimer, $pomodoroTimerNumber);
  //   // // $startBtn.classList.add('pomo_stop_btn');
  //   // // $startBtn.classList.remove('start_btn');
  //   // // $startBtn.textContent = 'stop'.toUpperCase();
  //   pomoSetTime = setTimeout(() => {
  //     restStartTimer(pomodoroRestTimer, $restTimerNumber);
  //     pomodoroTimer = 4;
  //     $pomodoroTimerNumber.textContent = '25:00';
  //     $startBtn.textContent = 'start'.toUpperCase();
  //   }, (pomodoroTimer + 1) * 1000);
  //   console.log(i, '끝날때 i?')
  // }
  //   else (e.target.textContent === 'pomo_stop_btn') {
  //     // console.log($stopBtn.classList[1] === 'pomo_stop_btn', '이 클래스리스트');
  //     console.log('야');
  //     // console.log(e.target.textContent, '야ㅑㅑㅑ');
  //     console.log('브레이크끝');
  //     pomodoroTimer = 4;
  //     $pomodoroTimerNumber.textContent = '25:00';
  //     $startBtn.textContent = 'start'.toUpperCase();
  //     clearInterval(pomodoroInterval);
  //     clearTimeout(pomoSetTime);
  //     break;
  //   }}

  // console.log(i, '이거 i임');
  /* console.log(2039);
      if (e.target === $startBtn) {
        // console.log('되냐');
        if ($startBtn.textContent.toLowerCase() === 'start') {
          // console.log('di');
          pomoStartTimer(pomodoroTimer, $pomodoroTimerNumber);
          $startBtn.textContent = 'stop'.toUpperCase();
          pomoSetTime = setTimeout(() => {
            restStartTimer(pomodoroRestTimer, $restTimerNumber);
            pomodoroTimer = 4;
            $pomodoroTimerNumber.textContent = '25:00';
            $startBtn.textContent = 'start'.toUpperCase();
          }, (pomodoroTimer + 1) * 1000);
        } else if (e.target.textContent.toLowerCase() === 'stop') {
          // console.log('뭐');
          pomodoroTimer = 4;
          $pomodoroTimerNumber.textContent = '25:00';
          $startBtn.textContent = 'start'.toUpperCase();
          clearInterval(pomodoroInterval);
          clearTimeout(pomoSetTime);
        }
      } */

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
  // };
};

// // ========== 뽀모도로 =====================================
// const $startBtn = document.querySelector('.start_btn');
// const $stopBtn = document.querySelector('.stop_btn');
// const $resetBtn = document.querySelector('.reset_btn');

// const $restStartBtn = document.querySelector('.rest_start_btn');
// const $restStopBtn = document.querySelector('.rest_stop_btn');
// const $restResetBtn = document.querySelector('.rest_reset_btn');

// const $pomodoroTimerNumber = document.querySelector('.pomodoro_timer_number');
// const $restTimerNumber = document.querySelector('.rest_timer_number');

// let pomodoroTimer = 1500; // 25분*60초 = 1500초
// let pomodoroRestTimer = 300; // 5분*60초 = 300초
// let pomodoroInterval;
// let restPomoInterval;

// // 뽀모도로 타이머랑, 쉬는시간 타이머의 중복인 함수를 인자전달로 코드수를 줄이는 리팩토링을 함.
// export const startTimer = (time, $timeNum) => {
//   console.log(time, $timeNum, 'a94irj');
//   // if (time < 0) {
//   //   clearInterval(pomodoroInterval);
//   // }
//   pomodoroInterval = setInterval(
//     () => {
//       if (time >= 0) {
//         console.log(time, $timeNum, 'asdas');
//         // String.prototype.padStart() 메서드는 현재 문자열의 시작을 다른 문자열로 채워,
//         // 주어진 길이를 만족하는 새로운 문자열을 반환한다.
//         // str.padStart(targetLength,[, padString])
//         // const str1 = '5';
//         // console.log(str1.padStart(2,'0')); // '05'
//         // => 길이를 2로 해서 시작을 0으로 채움.
//         const minutes = String(Math.floor(time / 60)).padStart(2, '0');
//         const seconds = String(Math.floor(time % 60)).padStart(2, '0');
//         time -= 1;
//         $timeNum.textContent = `${minutes}` + ':' + `${seconds}`;
//         console.log(minutes, 'minutes');
//         console.log(String(Math.floor(300 % 60)).padStart(2, '0'), '이거뭔지');
//       }
//     },
//     1000,
//     time,
//     $timeNum
//   );
//   console.log(time, $timeNum, '!!!!@@a94irj');
// };
// // setInterval(func, delay, arg0, arg1, /* ... ,*/ argN)
// // setInterval 에 인자를 전달하려면, 딜레이밀리초를 입력하고 그 뒤에 입력하면 된다. 그러면 전달이 된다.

// $startBtn.onclick = () => {
//   startTimer(pomodoroTimer, $pomodoroTimerNumber);
// };
// $stopBtn.onclick = () => {
//   console.log('stopCilck');
//   clearInterval(pomodoroInterval);
// };
// $resetBtn.onclick = () => {
//   pomodoroTimer = 1500;
//   $pomodoroTimerNumber.textContent = '25:00';
//   console.log('리셋!');
// };

// $restStartBtn.onclick = () => {
//   console.log('restStart');
//   startTimer(pomodoroRestTimer, $restTimerNumber);
// };
// $restStopBtn.onclick = () => {
//   console.log('stopREst');
//   clearInterval(pomodoroInterval);
// };
// $restResetBtn.onclick = () => {
//   console.log('REST reset');
//   pomodoroRestTimer = 300;
//   $restTimerNumber.textContent = '05:00';
// };
