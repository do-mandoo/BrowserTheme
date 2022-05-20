// 현재시간 JS
// export const nowTime = () => {
export const digital24Time = () => {
  const $digital24Clock = document.querySelector('.digital24_clock');
  $digital24Clock.classList.add('active');
  // const $div = document.createElement('div');
  // $div.classList.add('digital24_clock');

  const $timeSet = document.querySelector('.time_set');
  const HHMM = new Date().toTimeString().slice(0, 5);
  $digital24Clock.textContent = HHMM;

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
  const $digital24Clock = document.querySelector('.digital24_clock');
  // const $digita12Clock = document.querySelector('.digital12_clock');
  // const $timeSet = document.querySelector('.time_set');

  const $digita12Clock = document.createElement('div');
  // $digita12Clock.classList.add('digital12_clock', 'hiddenClock');
  $digita12Clock.classList.add('digital12_clock');

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
  $digita12Clock.innerText = time;
  $digita12Clock.textContent = time;

  // $digital24Clock.replaceChildren($digita12Clock);

  // replcechild
};

export const analogTime = () => {
  const $digital24Clock = document.querySelector('.digital24_clock');
  const $timeZone = document.querySelector('.time_zone');
  const $hourDiv = document.createElement('div');
  $hourDiv.classList.add('analogT', 'hour_time');
  const $minuteDiv = document.createElement('div');
  $minuteDiv.classList.add('analogT', 'minute_time');
  const $secondDiv = document.createElement('div');
  $secondDiv.classList.add('analogT', 'second_time');

  const $divWrap = document.createElement('div');
  // $divWrap.classList.add('analog_clock_wrap', 'hiddenClock');
  $divWrap.classList.add('analog_clock_wrap');

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

  $divWrap.appendChild($hourDiv);
  $divWrap.appendChild($minuteDiv);
  $divWrap.appendChild($secondDiv);

  // $timeZone.appendChild($divWrap);
  // $digital24Clock.replaceChildren($divWrap);
};

setInterval(() => {
  digital24Time();
  analogTime();
  digital12Time();
}, 1000);
