// ========== 음악재생 =====================================
const $musicWrap = document.querySelector('.music_wrap');
const $musicListWrap = document.querySelector('.music_list_wrap');
const $playingTitle = document.querySelector('.playing_title');
const $playBtn = document.querySelector('.play');
const $prevBtn = document.querySelector('.prev');
const $nextBtn = document.querySelector('.next');
// const $audioWrap = document.querySelector('.audio_wrap');

const $audio = document.querySelector('.audio');

// let genre = '';
let songs = [];
let songIndex = 0;

const music = async song => {
  console.log('하이루');
  const fetchData = async genre => {
    console.log(genre, '928j');

    const res = await fetch('../../music.json');
    const jsonData = await res.json();
    // console.log(jsonData, 'jsonData');
    const jsonItem = await jsonData.music[0];
    console.log(jsonItem, 'aisjid');
    // console.log(jsonItem.happy, '해피');
    // const gerneName = jsonItem + '.' + `${genre}`;
    // console.log(gerneName, '장르큰제목');
    // console.log(typeof gerneName, '23f');
    if (genre === 'chill' || !genre) {
      songs = [];
      jsonItem.chill.map(chill => songs.push(chill.src));
      loadSong('chill', songs[songIndex]);
    } else if (genre === 'happy') {
      songs = [];
      jsonItem.happy.map(happy => songs.push(happy.src));
      loadSong('happy', songs[songIndex]);
    } else if (genre === 'cozy') {
      songs = [];
      jsonItem.cozy.map(cozy => songs.push(cozy.src));
      loadSong('cozy', songs[songIndex]);
    }
    console.log(songs, '송 배열!!!');
    // loadSong(genre, songs[songIndex]);
  };
  fetchData();
  $musicListWrap.onclick = async e => {
    await fetchData(e.target.textContent);
  };
  function loadSong(genre, song) {
    console.log(song, 'song');
    $playingTitle.innerText = '"' + song + '"';
    $audio.src = `../music/${genre}/${song}.mp3`;
  }

  // 재생
  function playSong() {
    $musicWrap.classList.add('play');
    $playBtn.querySelector('i.fas').classList.remove('fa-play');
    $playBtn.querySelector('i.fas').classList.add('fa-pause');

    $audio.play();
  }

  // 일시정지
  function pauseSong() {
    $musicWrap.classList.remove('play');
    $playBtn.querySelector('i.fas').classList.add('fa-play');
    $playBtn.querySelector('i.fas').classList.remove('fa-pause');

    $audio.pause();
  }

  // 이전곡 재생
  $prevBtn.onclick = () => {
    songIndex--;

    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }

    console.log(songs[songIndex], '송 배열 이전곡');
    loadSong(genre, songs[songIndex]);

    playSong();
  };

  // 다음 곡 재생
  $nextBtn.onclick = () => {
    songIndex++;

    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
    console.log(songs[songIndex], '송 배열 다음곡');
    loadSong(genre, songs[songIndex]);

    playSong();
  };

  $playBtn.onclick = () => {
    const isPlaying = $musicWrap.classList.contains('play');

    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  };

  // 곡 종료
  // $audio.addEventListener('ended', $nextBtn);
};

music();

//
// ========== 뽀모도로 =====================================
const $startBtn = document.querySelector('.start_btn');
const $stopBtn = document.querySelector('.stop_btn');
const $resetBtn = document.querySelector('.reset_btn');

const $restStartBtn = document.querySelector('.rest_start_btn');
const $restStopBtn = document.querySelector('.rest_stop_btn');
const $restResetBtn = document.querySelector('.rest_reset_btn');

const $pomodoroTimerNumber = document.querySelector('.pomodoro_timer_number');
const $restTimerNumber = document.querySelector('.rest_timer_number');

let pomodoroTimer = 1500; // 25분*60초 = 1500초
let pomodoroRestTimer = 300; // 5분*60초 = 300초
let pomodoroInterval;
let restPomoInterval;

// 뽀모도로 타이머랑, 쉬는시간 타이머의 중복인 함수를 인자전달로 코드수를 줄이는 리팩토링을 함.
const startTimer = (time, $timeNum) => {
  console.log(time, $timeNum, 'a94irj');
  // if (time < 0) {
  //   clearInterval(pomodoroInterval);
  // }
  pomodoroInterval = setInterval(
    () => {
      if (time >= 0) {
        console.log(time, $timeNum, 'asdas');
        // String.prototype.padStart() 메서드는 현재 문자열의 시작을 다른 문자열로 채워,
        // 주어진 길이를 만족하는 새로운 문자열을 반환한다.
        // str.padStart(targetLength,[, padString])
        // const str1 = '5';
        // console.log(str1.padStart(2,'0')); // '05'
        // => 길이를 2로 해서 시작을 0으로 채움.
        const minutes = String(Math.floor(time / 60)).padStart(2, '0');
        const seconds = String(Math.floor(time % 60)).padStart(2, '0');
        time -= 1;
        $timeNum.textContent = `${minutes}` + ':' + `${seconds}`;
        console.log(minutes, 'minutes');
        console.log(String(Math.floor(300 % 60)).padStart(2, '0'), '이거뭔지');
      }
    },
    1000,
    time,
    $timeNum
  );
  console.log(time, $timeNum, '!!!!@@a94irj');
};
// setInterval(func, delay, arg0, arg1, /* ... ,*/ argN)
// setInterval 에 인자를 전달하려면, 딜레이밀리초를 입력하고 그 뒤에 입력하면 된다. 그러면 전달이 된다.

$startBtn.onclick = () => {
  startTimer(pomodoroTimer, $pomodoroTimerNumber);
};
$stopBtn.onclick = () => {
  console.log('stopCilck');
  clearInterval(pomodoroInterval);
};
$resetBtn.onclick = () => {
  pomodoroTimer = 1500;
  $pomodoroTimerNumber.textContent = '25:00';
  console.log('리셋!');
};

$restStartBtn.onclick = () => {
  console.log('restStart');
  startTimer(pomodoroRestTimer, $restTimerNumber);
};
$restStopBtn.onclick = () => {
  console.log('stopREst');
  clearInterval(pomodoroInterval);
};
$restResetBtn.onclick = () => {
  console.log('REST reset');
  pomodoroRestTimer = 300;
  $restTimerNumber.textContent = '05:00';
};
