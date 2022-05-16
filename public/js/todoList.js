// TODO오늘 할 일 JS
const TDL = 'tdlist';
let todolistArr = [];

const $inputTodo = document.querySelector('.input_todo');
const $add = document.querySelector('.add_todo');
const $todos = document.querySelector('.todos');
// const $button = document.querySelector('button');
export const saveTodo = content => {
  const obj = { text: content, id: todolistArr.length + 1 };
  todolistArr.push(obj);
  localStorage.setItem(TDL, JSON.stringify(todolistArr));
};
export function $addTodo(content) {
  // export function newTodo(kkk) {
  // const $addTodo = content => {

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
}
$add.onclick = () => {
  $addTodo($inputTodo.value);
  $inputTodo.value = '';
  $inputTodo.focus();
};
$todos.onclick = e => {
  if (!e.target.matches('.todos>li>div>button')) return;
  console.log(e.target.parentNode.parentNode, 'e.target.value');
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
      console.log(parseList, 'parseList');
      console.log(arr, 'arr');
      const filtering = parseList.filter(t => t.id === Number(arr));
      const filterId = filtering[0].id;
      console.log(filterId, '이거뭔데');
      // console.log(findItem, 'aoiaoisso');
    }

    // console.log(todolistArr, '수정때 arr뭐잇냐');
  }

  // 삭제
  if (e.target.matches('.remove')) {
    $todos.removeChild(e.target.parentNode.parentNode);
    console.log(e.target.parentNode.parentNode, '뭔지뭔지!');
    todolistArr = todolistArr.filter(t => t.id !== Number(arr));
    localStorage.setItem(TDL, JSON.stringify(todolistArr));
  }
};

/* $addTodo(kkk);
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
 */
