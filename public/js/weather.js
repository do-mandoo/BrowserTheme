// 현재 날씨 JSON
// res = https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherApiKey}
export const nowWeather = async () => {
  const $cTemp1 = document.querySelector('.c_temp1');
  const $weatherIcon1 = document.querySelector('.weather_icon1');
  const $cityName1 = document.querySelector('.city_name1');
  const kTemp = 273.15;
  fetch('../../weather.json')
    .then(res => {
      return res.json();
    })
    .then(wData => {
      const url =
        wData.sydney.weatherUrl +
        'q=' +
        wData.sydney.cityName +
        '&appid=' +
        wData.sydney.weatherApiKey;
      fetch(url)
        .then(res => {
          return res.json();
        })
        .then(wda => {
          console.log(wda, 'wad');
          if (wda) {
            console.log('wData is true');
            console.log(wda);
            const tempp = Math.floor(wda.main.temp - kTemp);
            $cTemp1.append(tempp);
            const $img = document.createElement('img');
            $img.setAttribute('src', wData.sydney.weatherImgUrl + wda.weather[0].icon + '.png');
            $img.setAttribute('alt', wda.weather[0].description);
            $weatherIcon1.append($img);
            $cityName1.append(wda.name);
          } else console.log('result is false');
        });
    });
  // const res = await fetch(``);
  // const result = await res.json();
};

// export default nowWeather();
