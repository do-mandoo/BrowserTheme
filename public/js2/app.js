const $startBtn = document.querySelector('.start_btn');
const $stopBtn = document.querySelector('.stop_btn');
const $hourText = document.querySelector('.hour_text');
const $minuteText = document.querySelector('.minute_text');
const $secondText = document.querySelector('.second_text');

let hours = 0;
let minutes = 0;
let seconds = 0;

// const timeX = '';
function startTimer() {
  setTimeout(function () {
    seconds++;
    if (seconds > 11) {
      seconds = 0;
      minutes++;
      if (minutes > 2) {
        minutes = 0;
        hours++;
        if (hours < 2) {
          $hourText.textContent = '0' + hours + ':';
        } else $hourText.textContent = hours + ':';
      }

      if (minutes < 10) {
        $minuteText.textContent = '0' + minutes + ':';
      } else $minuteText.textContent = minutes + ':';
    }
    if (seconds < 10) {
      $secondText.textContent = '0' + seconds;
    } else {
      $secondText.textContent = seconds;
    }

    startTimer();
    // ---------
    // let timeX = setTimeout(function () {
    //   seconds++;
    //   if (seconds > 59) {
    //     seconds = 0;
    //     minutes++;
    //     if (minutes > 59) {
    //       minutes = 0;
    //       hours++;
    //       if (hours < 10) {
    //         console.log('hour10');
    //       }
    //     }
    //   }
    //   startTimer();
  }, 1000);
}
$startBtn.onclick = () => {
  console.log('clickStart');
  startTimer();
};
$stopBtn.onclick = () => {
  console.log('stopCilck');
  // clearTimeout(timeX);
};
