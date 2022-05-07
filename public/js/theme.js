// 현재 날씨 JSON
// import { nowWeather } from './weather.js';

const nowWeather = async () => {
  // const dataYaml =
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

// Google, Naver 검색엔진
// import $searchForm from './searchEngine';
/* form태그라면,
const $searchForm = document.querySelector('.search_form');
const $submitBtn = document.querySelector('.submit_btn');
// const searchEngine = async e => {
$searchForm.onclick = async e => {
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
}; */
// form태그 아닌, 버튼 두 개로 검색엔진 페이지 연동.
const $searchEngine = document.querySelector('.gap1');
$searchEngine.onclick = async e => {
  if (!e.target.matches('.searchEn')) return;
  console.log(e.target.value, 'asod');
  const engineName = e.target.value;
  const googleUrl = 'https://www.' + engineName + '.co.kr';
  const naverUrl = 'https://www.' + engineName + '.com';

  engineName === 'google'
    ? (window.open('about:_blank').location.href = googleUrl)
    : (window.open('about:_blank').location.href = naverUrl);
};

// $searchForm.addEventListener('onclick', searchEngine);

// 명언 랜덤
// import saying from './goodSaying';
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
      return $famousSaying.append('"' + randomSaying[0].phrase + '"');
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
      const ImgSrcSplitSlice = randomImgSrc.split('/').slice(2);
      const srcImg = '../' + ImgSrcSplitSlice.join('/');
      console.log(srcImg, 'srcImg');
      return ($container.style['background-image'] = `url('${srcImg}')`);
    });
};

// 현재시간 JS
const $nowClick = document.querySelector('.now_clock');
const $timeSet = document.querySelector('.time_set');
const nowTime = () => {
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

// 시간대별 인사말 옆, 사용자이름 지정crud
const $userNameInput = document.querySelector('.user_name_input');
const $userSet = document.querySelector('.user_set');

const saveUserName = content => {
  const users = { username: content };
  localStorage.setItem('themeUserName', JSON.stringify(users));
};

const loadUserName = content => {
  console.log(content, '받아온 content');
  const getUserName = localStorage.getItem('themeUserName');
  if (getUserName) {
    const parseUserName = JSON.parse(getUserName);
    // $userSet.textContent = parseUserName.username.toUpperCase();
    console.log(parseUserName.username, 'parseUserName');
    const $wrapDiv = document.createElement('div');
    const $textDiv = document.createElement('div');
    const $btnWrapDiv = document.createElement('div');
    const $editBtn = document.createElement('button');
    const $delBtn = document.createElement('button');

    $wrapDiv.classList.add('wrap_username');

    $textDiv.classList.add('username');
    $textDiv.textContent = content;
    $textDiv.textContent = parseUserName.username;

    $editBtn.classList.add('username_edit');
    $editBtn.textContent = 'Edit';
    $delBtn.classList.add('username_del');
    $delBtn.textContent = 'Del';
    $btnWrapDiv.appendChild($editBtn);
    $btnWrapDiv.appendChild($delBtn);

    $wrapDiv.appendChild($textDiv);
    $wrapDiv.appendChild($btnWrapDiv);

    $userSet.replaceChildren($wrapDiv);
  }
  //else {
  //   $userNameInput.setAttribute('placeholder', '이름을 입력하세요.');
  // }
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
const $focusTodayWrap = document.querySelector('.focus_today_wrap');
const $focusTodayTitle = document.querySelector('.focus_today_title');
const $todayTodoSet = document.querySelector('.today_todo_set');
const $focusTodayInput = document.querySelector('.focus_today_input');
const saveTodayTodo = content => {
  const focusTodo = { todayTodo: content };
  localStorage.setItem('TodayTodo', JSON.stringify(focusTodo));
  const focusCheck = { completed: false };
  localStorage.setItem('TodayCheck', JSON.stringify(focusCheck));
};

const loadFocusTodayTodo = content => {
  const getTodayTodo = localStorage.getItem('TodayTodo');
  const getTodayCheck = localStorage.getItem('TodayCheck');
  if (getTodayTodo) {
    const parseTodayTodo = JSON.parse(getTodayTodo);
    const parseTodayCheck = JSON.parse(getTodayCheck);
    console.log(parseTodayCheck.completed, 'parsetodauchei');
    // console.log(focusCheck, 'focusCheck');
    const $label = document.createElement('label');
    const $input = document.createElement('input');
    const $span = document.createElement('span');
    const $span1 = document.createElement('span');
    const $btn1 = document.createElement('button');
    const $btn2 = document.createElement('button');

    $input.setAttribute('type', 'checkbox');
    // $input.setAttribute('checked', true);
    // parseTodayCheck.completed ? $input.setAttribute('checked', true) : $input.setAttribute('');
    $span.textContent = content;
    $span.textContent = parseTodayTodo.todayTodo;
    // $span.textContent = '♬';
    $span1.classList.add('moreBtn');
    $btn1.classList.add('editBtn');
    $btn1.textContent = 'Edit';
    $btn2.classList.add('delBtn');
    $btn2.textContent = 'Del';

    $label.appendChild($input);
    $label.appendChild($span);

    $span1.appendChild($btn1);
    $span1.appendChild($btn2);

    $label.appendChild($span1);

    // $focusTodayWrap.appendChild($input);
    $focusTodayWrap.replaceChildren($label);
  } else {
  }
};
$focusTodayInput.onkeypress = e => {
  if (e.key !== 'Enter' || !$focusTodayInput.value) return;
  $focusTodayWrap.textContent = $focusTodayInput.value;
  loadFocusTodayTodo($focusTodayInput.value);
  saveTodayTodo($focusTodayInput.value);
  location.reload();
};

$focusTodayWrap.onclick = e => {
  if (!e.target.matches('.focus_today_wrap > label > span >button')) return;
  // if (!e.target.matches('.todos>li>div>button')) return;
  const $editBtn = document.querySelector('.editBtn');
  const $delBtn = document.querySelector('.delBtn');
  console.log('hi');
  if (e.target === $editBtn) {
    const currentTitle = $focusTodayWrap.firstChild.firstChild.nextSibling;
    // console.log(currentTitle, 'titit');
    // $focusTodayWrap.innerHTML = `
    //     <input class="focus_today_input" name="" type="text" value="${currentTitle}"/>
    //   `;
    const renamedTodoText = prompt('할 일 수정', currentTitle.innerText); //prompt('내용', '기본값')
    currentTitle.textContent = renamedTodoText;

    const focusTodo = { todayTodo: currentTitle.textContent };
    localStorage.setItem('TodayTodo', JSON.stringify(focusTodo));
  }
  if (e.target === $delBtn) {
    console.log('oo');
    const result = e.target.parentNode.parentNode;
    console.log(result, 'rese');
    $focusTodayWrap.removeChild(result);
    localStorage.removeItem('TodayTodo');
    location.reload();
  }
  // if (e.target.matches('.focus_today_wrap > label > input[type=checkbox]')) {
  //   const focusCheck = { completed: e.target.checked };
  //   localStorage.setItem('TodayCheck', JSON.stringify(focusCheck));
  // }
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
  const obj = { text: content, id: todolistArr.length + 1 };
  todolistArr.push(obj);
  localStorage.setItem(TDL, JSON.stringify(todolistArr));
};

const $addTodo = content => {
  const $li = document.createElement('li');
  const $WrapLabel = document.createElement('label');
  const $TeLabel = document.createElement('label');
  const $CkInput = document.createElement('input');
  const $TeInput = document.createElement('input');
  const $div = document.createElement('div');
  const $MoButton = document.createElement('button');
  const $DeButton = document.createElement('button');

  $CkInput.setAttribute('type', 'checkbox');

  // $TeLabel.setAttribute('for', 'text_input');
  // $TeInput.setAttribute('id', 'text_input');
  $TeInput.setAttribute('type', 'text');
  $TeInput.classList.add('text_input');

  $WrapLabel.classList.add('wrap_label');
  $TeLabel.classList.add('text_label');

  $DeButton.classList.add('remove');
  // $span.textContent = content;
  $TeLabel.textContent = content;
  // $span.setAttribute('contentEditable', 'true');
  $DeButton.textContent = '삭제';

  $MoButton.classList.add('modify');
  $MoButton.textContent = '수정';
  // $TeLabel.appendChild($TeInput);
  $WrapLabel.appendChild($CkInput);
  $WrapLabel.appendChild($TeLabel);
  $WrapLabel.appendChild($TeInput);

  $div.appendChild($MoButton);
  $div.appendChild($DeButton);

  $li.appendChild($WrapLabel);
  $li.appendChild($div);
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
  if (!e.target.matches('.todos>li>div>button')) return;
  console.log('aoi98');
  const arr = e.target.parentNode.parentNode.id;
  console.log(arr, 'remove의 arr'); // 숫자임.

  const eItem = e.target.parentNode.parentNode;
  const editInput = eItem.querySelector('input[type=text]'); // input[type=text]
  const editLabel = eItem.querySelector('.text_label');
  // const modifyBtn = document.querySelector('.modify');

  const isContainsClass = eItem.classList.contains('edit_mode');
  // 수정
  if (editInput) {
    if (isContainsClass) {
      editLabel.textContent = editInput.value;
      // modifyBtn.textContent = '수정완료';
    } else {
      editInput.value = editLabel.textContent;
      // modifyBtn.textContent = '수정하기';
    }
    eItem.classList.toggle('edit_mode');
    const loadedList = localStorage.getItem(TDL);
    console.log(loadedList, 'loadedList getItem');
    if (loadedList !== null) {
      console.log(66);
      const parseList = JSON.parse(loadedList);
      const filtering = parseList.filter(t => t.id === Number(arr));
      const filterId = filtering[0].id;
      console.log(findItem, 'aoiaoisso');

      // console.log(parseList, 'parseList');
      // for (let content of parseList) {
      //   // console.log(content, 'content');
      //   const { text } = content;
      //   $addTodo(text);
      //   saveTodo(text);
      // }
    }
    // saveTodo(editInput);
    // localStorage.setItem(TDL, JSON.stringify(oobj));

    // todolistArr = todolistArr.filter(t=>t.id === Number(arr));
    // const lu = todolistArr.filter(t => t.id === Number(arr));
    // console.log(lu[0].id, '아이디찾자');
  }

  // 삭제
  if (e.target.matches('.remove')) {
    $todos.removeChild(e.target.parentNode.parentNode);
    todolistArr = todolistArr.filter(t => t.id !== Number(arr));
    localStorage.setItem(TDL, JSON.stringify(todolistArr));
  }
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
      saveTodo(text);
    }
  }
  nowTime();
};

const init = () => {
  nowWeather();
  loadTodoList();
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
