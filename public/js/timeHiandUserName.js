// 시간대별 인사말 옆, 사용자이름 지정crud
// export const loadUserNameWrap = () => {
const $userSet = document.querySelector('.user_set');

// const saveUserName = content => {
//   const users = { username: content };
//   localStorage.setItem('themeUserName', JSON.stringify(users));
// };

export const loadUserName = content => {
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
    $btnWrapDiv.classList.add('username_moreBtn');
    $btnWrapDiv.appendChild($editBtn);
    $btnWrapDiv.appendChild($delBtn);

    $wrapDiv.appendChild($textDiv);
    $wrapDiv.appendChild($btnWrapDiv);

    $userSet.replaceChildren($wrapDiv);
  }
  //else {
  //   $userNameInput.setAttribute('placeholder', '이름을 입력하세요.');
  // }
  // };

  // $userNameInput.onkeypress = e => {
  //   if (e.key !== 'Enter' || !$userNameInput.value) return;
  //   console.log($userNameInput.value, 'asdfadf');
  //   $userSet.textContent = $userNameInput.value;
  //   loadUserName($userNameInput.value);
  //   saveUserName($userNameInput.value);
  //   location.reload();
  // };
  $userSet.onclick = e => {
    if (!e.target.matches('.user_set>div>div>button')) return;
    // console.log('버튼이여 사쿠라여');
    console.log(e.target);
    const $usernameEditBtn = document.querySelector('.username_edit');
    const $usernameDelBtn = document.querySelector('.username_del');
    if (e.target === $usernameEditBtn) {
      console.log('hsisi');
      const currentValue = $userSet.firstChild.firstChild;
      console.log(currentValue, ' 커뭘뤈트벨류~');
      const renamedUsername = prompt('사용자 이름 수정', currentValue.innerText);
      currentValue.textContent = renamedUsername;
      const usernameSet = { username: currentValue.textContent };
      localStorage.setItem('themeUserName', JSON.stringify(usernameSet));
    } else if (e.target === $usernameDelBtn) {
      const result = e.target.parentNode.parentNode;
      console.log(result, 'adlkjf리졀트 딜렉트');
      $userSet.removeChild(result);
      localStorage.removeItem('themeUserName');
      location.reload();
    } else {
      console.log('error username Set!');
    }
  };
};
