// Google, Naver 검색엔진
const $searchForm = document.querySelector('.search_form');
const $submitBtn = document.querySelector('.submit_btn');
// const searchEngine = async e => {
$searchForm.onsubmit = async e => {
  e.preventDefault();
  if (!e.target.matches('.search_word')) return;

  const selectValue = e.target.previousElementSibling.value;
  let inputValue = e.target.value;
  console.log('hihihihihih');
  console.log(selectValue, inputValue);

  if (selectValue === 'google') {
    location.href = 'https://www.google.co.kr/search?q=' + inputValue;
  } else if (selectValue === 'naver') {
    location.href =
      'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=' +
      inputValue;
  }
};

// $searchForm.addEventListener('onclick', searchEngine);

// 명언 랜덤
const $famousSaying = document.querySelector('.famous_saying');

const saying = () => {
  fetch('../../saying.json')
    .then(res => {
      return res.json();
    })
    .then(sayingData => {
      console.log(sayingData.saying[0].phrase, 33);
      let randomSaying = '';
      const saydataArr = sayingData.saying;
      const randomSay = Math.random() * saydataArr.length - 1;
      randomSaying = saydataArr.splice(Math.floor(randomSay), 1);
      return $famousSaying.append(randomSaying[0].phrase);
    });
};

// 배경 사진 랜덤
const $container = document.querySelector('.container');
const img = () => {
  fetch('../../image.json')
    .then(res => {
      return res.json();
    })
    .then(imgData => {
      let randomImage = '';
      const imgArr = imgData.img;
      const randomImg = Math.floor(Math.random() * imgArr.length - 1);
      randomImage = imgArr.splice(randomImg, 1);
      const randomImgSrc = randomImage[0].src;
      const srcImg = '..' + randomImgSrc.slice(9);
      return ($container.style['background-image'] = `url('${srcImg}')`);
    });
};

// 현재시간 JS
const $nowClick = document.querySelector('.now_clock');
const nowTime = () => {
  const HHMM = new Date().toTimeString().slice(0, 5);
  $nowClick.textContent = HHMM;
};

// 현재 날씨 JSON
const nowWeather = async () => {
  const $cTemp1 = document.querySelector('.c_temp1');
  const $weatherIcon1 = document.querySelector('.weather_icon1');
  const $cityName1 = document.querySelector('.city_name1');
  const weatherApiKey = '026ab543b433f9fb5be49ecf54e39b91';
  const cityName = 'sydney';
  const kTemp = 273.15;
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherApiKey}`
  );
  const result = await res.json();
  if (result) {
    console.log('result is true');
    console.log(result);
    const tempp = Math.floor(result.main.temp - kTemp);
    $cTemp1.append(tempp);
    const $img = document.createElement('img');
    $img.setAttribute('src', 'http://openweathermap.org/img/w/' + result.weather[0].icon + '.png');
    $img.setAttribute('alt', result.weather[0].description);
    $weatherIcon1.append($img);
    $cityName1.append(result.name);
    $;
  } else console.log('result is false');
};

// TODO오늘 할 일 JS
const $inputTodo = document.querySelector('.input_todo');
const $add = document.querySelector('.add_todo');
const $todos = document.querySelector('.todos');
const $button = document.querySelector('button');
const $todoTitle = document.querySelector('.todo_title');
const $mainTodos = document.querySelector('.main_todos');

const TDL = 'tdlist';
let todolistArr = [];

// todo modal
$todoTitle.onclick = () => {
  $mainTodos.classList.toggle('hidden');
};

const saveTodo = content => {
  const obj = { text: content, id: todolistArr.length + 1, completed: false };
  todolistArr.push(obj);
  localStorage.setItem(TDL, JSON.stringify(todolistArr));
};

const $addTodo = content => {
  const $li = document.createElement('li');
  const $label = document.createElement('label');
  const $input = document.createElement('input');
  const $span = document.createElement('span');
  const $button = document.createElement('button');

  $input.setAttribute('type', 'checkbox');
  $button.classList.add('remove');
  $span.textContent = content;
  $span.setAttribute('contentEditable', 'true');
  $button.textContent = 'X';

  $label.appendChild($input);
  $label.appendChild($span);

  $li.appendChild($label);
  $li.appendChild($button);
  $li.id = todolistArr.length + 1;

  $todos.appendChild($li, $todos.firstElementChild);
};

$inputTodo.onkeypress = e => {
  if (e.key !== 'Enter' || !$inputTodo.value) return;

  $addTodo($inputTodo.value);
  console.log(1);
  saveTodo($inputTodo.value);

  console.log(2);
  $inputTodo.value = '';
};

$add.onclick = () => {
  $addTodo($inputTodo.value);
  $inputTodo.value = '';
  $inputTodo.focus();
};

$todos.onclick = e => {
  if (!e.target.matches('.todos>li>.remove')) return;
  const arr = e.target.parentNode.id;

  $todos.removeChild(e.target.parentNode);
  todolistArr = todolistArr.filter(t => t.id !== Number(arr));
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
      $addTodo(text);
      saveTodo(text);
    }
  }
  nowTime();
};

// loadTodoList();

const init = () => {
  nowWeather();
  loadTodoList();
  saying();
  img();
  setInterval(() => {
    nowTime();
  }, 1000);
  // searchEngine();
  // $searchForm.addEventListener('submit', searchEngine, false);
};

init();
