// 현재 날씨 JSON
import { nowWeather } from './weather.js';

// Google, Naver 검색엔진
import { searchEngineWrap } from './searchEngine.js';

// 명언 랜덤
import { saying } from './goodSaying.js';

// 배경 사진 랜덤
import { img } from './backgorundImage.js';

// 현재시간 JS
import { nowTime } from './nowTime.js';

// 시간대별 인사말 옆, 사용자이름 지정crud
// import { loadUserNameWrap } from './timeHiandUserName.js';
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
import { newTodo } from './todoList.js';

const $inputTodo = document.querySelector('.input_todo');
const $add = document.querySelector('.add_todo');
const $todos = document.querySelector('.todos');
const $button = document.querySelector('button');
const $todoTitle = document.querySelector('.todo_title');
const $mainTodos = document.querySelector('.main_todos');

const TDL = 'tdlist';
let todolistArr = [];

$inputTodo.onkeypress = e => {
  if (e.key !== 'Enter' || !$inputTodo.value) return;

  $addTodo($inputTodo.value);
  console.log(1);
  saveTodo($inputTodo.value);

  console.log(2);
  $inputTodo.value = '';
};

// todo modal
$todoTitle.onclick = () => {
  $mainTodos.classList.toggle('hidden');
};

const saveTodo = content => {
  const obj = { text: content, id: todolistArr.length + 1 };
  todolistArr.push(obj);
  localStorage.setItem(TDL, JSON.stringify(todolistArr));
};

const loadTodoList = () => {
  const loadedList = localStorage.getItem(TDL);
  console.log(loadedList, 'loadedList getItem');
  if (loadedList !== null) {
    console.log(33);
    const parseList = JSON.parse(loadedList);
    console.log(parseList, 'parseList');
    for (let content of parseList) {
      console.log(content, 'content');
      const { text } = content;
      newTodo(text);
      saveTodo(text);
    }
  }
  nowTime();
};

const init = () => {
  nowWeather();
  searchEngineWrap();
  loadTodoList();
  newTodo();
  saying();
  img();
  setInterval(() => {
    nowTime();
  }, 1000);
  loadUserName();
  loadFocusTodayTodo();
  // searchEngine();
  // $searchForm.addEventListener('submit', searchEngine, false);
  // btnAction();
};

init();
