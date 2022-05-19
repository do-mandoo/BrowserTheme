// 현재시간 JS
export const nowTime = () => {
  const $nowClick = document.querySelector('.now_clock');
  const $timeSet = document.querySelector('.time_set');
  const HHMM = new Date().toTimeString().slice(0, 5);
  $nowClick.textContent = HHMM;

  const hhh = Number(HHMM.slice(0, 2));

  if (20 < hhh && hhh < 24) {
    //pm8~am3
    $timeSet.textContent = 'good evening,';
  } else if (11 < hhh && hhh < 19) {
    //am12~20
    $timeSet.textContent = 'good afternoon,';
  } else {
    $timeSet.textContent = 'good morning,';
  }
};
export const digital12Time = () => {
  const $nowClick = document.querySelector('.now_clock');
  const $timeSet = document.querySelector('.time_set');

  const date = new Date();
  let hour = date.getHours(); // 0 - 23
  let minute = date.getMinutes(); // 0 - 59
  // let second = date.getSeconds(); // 0 - 59
  let amOrpm = 'AM';

  if (hour === 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour = hour - 12;
    amOrpm = 'PM';
  }

  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  // second = second < 10 ? '0' + second : second;

  const time = hour + ':' + minute + ' ' + amOrpm;
  // const time = hour + ':' + minute + ':' + second + ' ' + amOrpm;
  $nowClick.innerText = time;
  $nowClick.textContent = time;
};
export const analogTime = () => {
  const $hourDiv = document.querySelector('.hour_time');
  const $minuteDiv = document.querySelector('.minute_time');
  const $secondDiv = document.querySelector('.second_time');

  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  $secondDiv.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  $minuteDiv.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  $hourDiv.style.transform = `rotate(${hourDegrees}deg)`;
};
