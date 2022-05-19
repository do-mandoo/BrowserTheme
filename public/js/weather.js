// 현재 날씨 JSON
// res = https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherApiKey}
export const nowWeather = async () => {
  const $cTemp1 = document.querySelector('.c_temp1');
  const $weatherIcon1 = document.querySelector('.weather_icon1');
  const $mainTopBottom = document.querySelector('.main_top_bottom1');
  const kTemp = 273.15;

  const fetchData = async cityName => {
    console.log(cityName, 'huhuhuhu');
    const res = await fetch('../../weather.json');
    const jsonData = await res.json();
    console.log(jsonData, 'jsonData');
    if (!cityName) {
      cityName = 'Seoul';
    }
    const url = (await jsonData.weatherUrl) + 'q=' + cityName + '&appid=' + jsonData.weatherApiKey;
    const res2 = await fetch(url);
    const result = await res2.json();
    const tempp = Math.floor(result.main.temp - kTemp);
    $cTemp1.replaceChildren(tempp);
    const $img = document.createElement('img');
    $img.setAttribute('src', jsonData.weatherImgUrl + result.weather[0].icon + '.png');
    $img.setAttribute('alt', result.weather[0].description);
    $weatherIcon1.replaceChildren($img);
  };
  fetchData();
  $mainTopBottom.onclick = async e => {
    if (!e.target.matches('.main_top_bottom1>select')) return;
    await fetchData(e.target.value);
  };
  // fetch('../../weather.json')
  //   .then(res => {
  //     return res.json();
  //   })
  //   .then(wData => {
  //     console.log(wData, 'wdata'); // canada, seoul, sydney
  //     const url = wData.weatherUrl + 'q=' + wData.cityName[2] + '&appid=' + wData.weatherApiKey;
  //     fetch(url)
  //       .then(res => {
  //         console.log(res, 'rerres');
  //         return res.json();
  //       })
  //       .then(wda => {
  //         console.log(wda, 'wad');
  //         if (wda) {
  //           console.log('wData is true');
  //           console.log(wda, wda);
  //           const tempp = Math.floor(wda.main.temp - kTemp);
  //           $cTemp1.append(tempp);
  //           const $img = document.createElement('img');
  //           $img.setAttribute('src', wData.weatherImgUrl + wda.weather[0].icon + '.png');
  //           $img.setAttribute('alt', wda.weather[0].description);
  //           $weatherIcon1.append($img);
  //           $cityName1.append(wda.name);
  //         } else console.log('result is false');
  //       });
  //   });
  // const res = await fetch(``);
  // const result = await res.json();
};

// export default nowWeather();
