let $containerSlider = document.querySelector('.main_container');
let $mainInnerSliders = document.querySelector('.main_main');
let $articleSildeItems = document.querySelectorAll('.page');

let isMouseDown = false;
let startX, scrollLeft;

// $mainInnerSliders.onmousedown = e => {
//   console.log('마우스 다운');
//   isMouseDown = true;
//   $mainInnerSliders.classList.add('activeSlide');

//   startX = e.pageX - $mainInnerSliders.offsetLeft;
//   console.log(startX, '마우스다운의 startX');
//   scrollLeft = $mainInnerSliders.scrollLeft;
// };
// $mainInnerSliders.onmouseleave = () => {
//   console.log('마우스 리브');
//   isMouseDown = false;
//   $mainInnerSliders.classList.remove('activeSlide');
// };
// $mainInnerSliders.onmouseup = () => {
//   console.log('마우스 업');
//   isMouseDown = false;
//   $mainInnerSliders.classList.remove('activeSlide');
// };
// $mainInnerSliders.onmousemove = e => {
//   console.log('마우스 무브');
//   if (!isMouseDown) return;
//   e.preventDefault();
//   const x = e.pageX - $mainInnerSliders.offsetLeft;
//   const move = (x - startX) * 1;
//   $mainInnerSliders.scrollLeft = scrollLeft - move;
// };

$containerSlider.onmousedown = e => {
  if (onclick) {
    console.log('마우스다운');
  }
  isMouseDown = true;
  startX = e.offsetX - $mainInnerSliders.offsetLeft;
  $containerSlider.style.cursor = 'grabbing';
  $mainInnerSliders.style.pointerEvents = 'none';
};

$containerSlider.onmouseenter = () => {
  console.log('마우스엔터');
  $containerSlider.style.cursor = 'grab';
};

$containerSlider.onmouseup = () => {
  console.log('마우스업');
  $containerSlider.style.cursor = 'grab';
  $mainInnerSliders.style.pointerEvents = 'unset';
};

window.onmouseup = () => {
  console.log('마우스업또?');
  isMouseDown = false;
};

$containerSlider.onmousemove = e => {
  if (!isMouseDown) return;
  console.log('마우스무브');
  e.preventDefault();
  scrollLeft = e.offsetX;

  $mainInnerSliders.style.left = `${scrollLeft - startX}px`;
  checkboundary();
};

const checkboundary = () => {
  let outer = $containerSlider.getBoundingClientRect();
  let inner = $mainInnerSliders.getBoundingClientRect();

  if (parseInt($mainInnerSliders.style.left) > 0) {
    $mainInnerSliders.style.left = '0px';
  } else if (inner.right < outer.right) {
    $mainInnerSliders.style.left = `-${inner.width - outer.width}px`;
  }
};
