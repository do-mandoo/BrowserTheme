// 배경 사진 랜덤
export const img = () => {
  const $container = document.querySelector('.container');
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
