// 현재시간 JS
export const nowTime = () => {
  const $nowClick = document.querySelector('.now_clock');
  const $timeSet = document.querySelector('.time_set');
  const HHMM = new Date().toTimeString().slice(0, 5);
  $nowClick.textContent = HHMM;

  const hhh = Number(HHMM.slice(0, 2));
  // console.log(hhh);
  // console.log(typeof hhh);

  if (20 < hhh && hhh < 24) {
    //pm8~am3
    $timeSet.textContent = 'good evening,';
  } else if (11 < hhh && hhh < 19) {
    //am12~20
    $timeSet.textContent = 'good afternoon,';
  } else {
    $timeSet.textContent = 'good morning,';
  }
  // $timeSet.appendChild($div);
  // else if (13 < hhh < 19) {
  //   $timeSet.textContent = 'good afternoon';
  // } else if (01 < hhh < 12) {
  //   $timeSet.text = 'good morning';
  // }
};
