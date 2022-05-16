// Google, Naver 검색엔진

// const $searchForm = document.querySelector('.search_form');
// const $submitBtn = document.querySelector('.submit_btn');
// // const searchEngine = async e => {
// $searchForm.onclick = async e => {
//   e.preventDefault();
//   if (!e.target.matches('.search_word')) return;

//   const selectValue = e.target.previousElementSibling.value;
//   let inputValue = e.target.value;
//   console.log('hihihihihih');
//   console.log(selectValue, inputValue);

//   if (selectValue === 'google') {
//     location.href = 'https://www.google.co.kr/search?q=' + inputValue;
//   } else if (selectValue === 'naver') {
//     location.href =
//       'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=' +
//       inputValue;
//   }
// };

// export default $searchForm;

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

//----------------
export const searchEngineWrap = () => {
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
};

// $searchForm.addEventListener('onclick', searchEngine);
