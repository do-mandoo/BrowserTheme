export const saying = () => {
  const $famousSaying = document.querySelector('.famous_saying');
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
