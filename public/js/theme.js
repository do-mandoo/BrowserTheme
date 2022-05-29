// 현재 날씨 JSON
import { nowWeather } from './weather.js';

// Google, Naver 검색엔진
import { searchEngineWrap } from './searchEngine.js';

// 명언 랜덤
import { saying } from './goodSaying.js';

// 배경 사진 랜덤
import { img } from './backgorundImage.js';

// 현재시간 JS
import { digital24Time, analogTime, digital12Time } from './nowTime.js';

// 시간대별 인사말 옆, 사용자이름 지정crud
import { loadUserName } from './timeHiandUserName.js';
const $userSet = document.querySelector('.user_set');
const $userNameInput = document.querySelector('.user_name_input');
const saveUserName = content => {
  const users = { username: content };
  localStorage.setItem('themeUserName', JSON.stringify(users));
};
$userNameInput.onkeypress = e => {
  if (e.key !== 'Enter' || !$userNameInput.value) return;
  console.log($userNameInput.value, 'asdfadf');
  $userSet.textContent = $userNameInput.value;
  loadUserName($userNameInput.value);
  saveUserName($userNameInput.value);
  location.reload();
};

// FOCUS FOR TODAY crud
import { loadFocusTodayTodo } from './focusToday.js';

const $focusTodayWrap = document.querySelector('.focus_today_wrap');
const $focusTodayInput = document.querySelector('.focus_today_input');
const saveTodayTodo = content => {
  const focusTodo = { todayTodo: content };
  localStorage.setItem('TodayTodo', JSON.stringify(focusTodo));
  const focusCheck = { completed: false };
  localStorage.setItem('TodayCheck', JSON.stringify(focusCheck));
};

$focusTodayInput.onkeypress = e => {
  if (e.key !== 'Enter' || !$focusTodayInput.value) return;
  $focusTodayWrap.textContent = $focusTodayInput.value;
  loadFocusTodayTodo($focusTodayInput.value);
  saveTodayTodo($focusTodayInput.value);
  location.reload();
};

// TODO오늘 할 일 JS
import { $addTodo, saveTodo } from './todoList.js';

const $inputTodo = document.querySelector('.input_todo');
// const $button = document.querySelector('button');
const $todoTitle = document.querySelector('.todo_title');
const $mainTodos = document.querySelector('.main_todos');

const TDL = 'tdlist';
// let todolistArr = [];

$inputTodo.onkeypress = e => {
  if (e.key !== 'Enter' || !$inputTodo.value) return;

  $addTodo($inputTodo.value);
  // newTodo($inputTodo.value);
  saveTodo($inputTodo.value);

  $inputTodo.value = '';
};

// todo modal
$todoTitle.onclick = () => {
  $mainTodos.classList.toggle('hidden');
};

const loadTodoList = () => {
  const loadedList = localStorage.getItem(TDL);
  console.log(loadedList, 'loadedList getItem');
  if (loadedList !== null) {
    console.log(33);
    const parseList = JSON.parse(loadedList);
    console.log(parseList, 'parseList');
    for (let content of parseList) {
      // console.log(content, 'content');
      const { text } = content;
      $addTodo(text);
      // newTodo(text);
      saveTodo(text);
    }
  }
};
const clockChange = () => {
  // const activeClass = document.querySelector('.active');
  const $digital24Clock = document.querySelector('.digital24_clock');
  const $digital12Clock = document.querySelector('.digital12_clock');
  const $analogClock = document.querySelector('.analog_clock');
  const $chageClockBtn = document.querySelector('.change_clock_bnt');
  let clickPoint = 0;

  $digital24Clock.classList.remove('hiddenClock');
  $analogClock.classList.remove('hiddenClock');

  $digital12Clock.classList.add('hiddenClock');
  $analogClock.classList.add('hiddenClock');

  $chageClockBtn.onclick = e => {
    if (!e.target.matches('button')) return;
    let clickDivide = clickPoint % 3; // 0 1 2

    if (clickDivide === 0) {
      console.log('1번클릭'); // 12버전
      $digital12Clock.classList.remove('hiddenClock');
      $analogClock.classList.remove('hiddenClock');

      $digital24Clock.classList.add('hiddenClock');
      $analogClock.classList.add('hiddenClock');
    } else if (clickDivide === 2) {
      console.log('2번클릭'); // 24버전
      $digital24Clock.classList.remove('hiddenClock');
      $analogClock.classList.remove('hiddenClock');

      $digital12Clock.classList.add('hiddenClock');
      $analogClock.classList.add('hiddenClock');
    } else if (clickDivide === 1) {
      console.log('3번클릭'); // 아날로그버전
      $digital24Clock.classList.remove('hiddenClock');
      $analogClock.classList.remove('hiddenClock');

      $digital12Clock.classList.add('hiddenClock');
      $digital24Clock.classList.add('hiddenClock');
    } else {
      console.log('시간 클릭 에러');
    }
    clickPoint++;
  };
};

const init = () => {
  nowWeather();
  searchEngineWrap();
  loadTodoList();
  clockChange();
  // newTodo();
  // $addTodo();
  saying();
  img();
  digital24Time();
  analogTime();
  digital12Time();
  // setInterval(() => {
  // digital24Time();
  // analogTime();
  // digital12Time();
  // }, 1000);
  loadUserName();
  loadFocusTodayTodo();
  // searchEngine();
  // $searchForm.addEventListener('submit', searchEngine, false);
  // btnAction();
};

init();
