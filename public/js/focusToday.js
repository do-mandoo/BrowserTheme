// FOCUS FOR TODAY c
export const loadFocusTodayTodo = content => {
  const $focusTodayWrap = document.querySelector('.focus_today_wrap');
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
  $focusTodayWrap.onclick = e => {
    if (!e.target.matches('.focus_today_wrap > label > span >button')) return;
    const $editBtn = document.querySelector('.editBtn');
    const $delBtn = document.querySelector('.delBtn');
    console.log('hi');
    if (e.target === $editBtn) {
      const currentTitle = $focusTodayWrap.firstChild.firstChild.nextSibling;
      console.log(currentTitle, 'titit');
      // $focusTodayWrap.innerHTML = `
      //     <input class="focus_today_input" name="" type="text" value="${currentTitle}"/>
      //   `;
      const renamedTodoText = prompt('할 일 수정', currentTitle.innerText); //prompt('내용', '기본값')
      currentTitle.textContent = renamedTodoText;

      const focusTodo = { todayTodo: currentTitle.textContent };
      localStorage.setItem('TodayTodo', JSON.stringify(focusTodo));
    } else if (e.target === $delBtn) {
      console.log('oo');
      const result = e.target.parentNode.parentNode;
      console.log(result, 'rese');
      $focusTodayWrap.removeChild(result);
      localStorage.removeItem('TodayTodo');
      location.reload();
    } else {
      console.log('error focus todo!');
    }
    // if (e.target.matches('.focus_today_wrap > label > input[type=checkbox]')) {
    //   const focusCheck = { completed: e.target.checked };
    //   localStorage.setItem('TodayCheck', JSON.stringify(focusCheck));
    // }
  };
};
