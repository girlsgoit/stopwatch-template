console.log("Here");

// Scrie un program, care la click pe butonul start, va începe un
// countdown folosind valoarea introdusă în input în secunde,
// începutul countdown-ului. La click pe butonul stop, countdown-ul
// trebuie să se oprească și progressul să indice 0.
// În timpul progress-ului, el trebuie să fie afișat în pagină
// cu indicatoare pentru minute și secunde.

// 1. Scriem HTML-ul
// 2. Adăugăm id-uri și class name-uri pe elemente
// 3. Adăugăm event listner pe butoane
// 4. Creăm funcția ce va porni stopwatch-ul
// 5. Creăm funcția ce va crea și afișa text-ul pentru minute, secunde și milisecunde
// 6. Creăm funcția ce va opri stopwatch-ul
// 7. Creăm funția ce va face reset la stopwatch

let intervalId;

let countMiliseconds = 0;

document.querySelector('.start-btn').addEventListener('click', handleStart);
document.querySelector('.pause-btn').addEventListener('click', handlePause);
document.querySelector('.reset-btn').addEventListener('click', handleReset);

function handleStart() {
  intervalId = setInterval(function() {
    countMiliseconds++;
    showTime();
  }, 10);
}

function handlePause() {
    clearInterval(intervalId);
}

function handleReset() {
  clearInterval(intervalId);
  countMiliseconds = 0;
  showTime();
  cleanLaps();
}

function convertMiliseconds(value) {
  const minutes = Math.floor(value / 100 / 60) % 60;
  const seconds = Math.floor(value / 100) % 60;
  const miliseconds = value % 100;
  
  return { minutes: minutes < 10 ? '0' + minutes : minutes, seconds: seconds < 10 ? '0' + seconds : seconds, miliseconds: miliseconds < 10 ? '0' + miliseconds : miliseconds };
};

function showTime() {
  const {minutes, seconds, miliseconds} = convertMiliseconds(countMiliseconds);

  document.querySelector('.minutes').innerText = `${minutes}m`;
  document.querySelector('.seconds').innerText = `${seconds}s`;
  document.querySelector('.miliseconds').innerText = `${miliseconds}ms`;
}


// Bonus, lap counter
document.querySelector('.lap-btn').addEventListener('click', handleLap);
let lapCounter = 0;
let lapTimeMS = countMiliseconds;

function getLapItemTimeHTML(time) {
  const {minutes, seconds, miliseconds} = convertMiliseconds(time);
  
  const div = document.createElement('div');
  div.classList.add('laps__item-time');

  div.innerHTML = `
    <span>${minutes}m</span>
    <span>:</span>
    <span>${seconds}s</span>
    <span>:</span>
    <span>${miliseconds}ms</span>
  `;

  return div;
}

function getLapItemHTML() {
  const li = document.createElement('li');
  li.classList.add('laps__item');

  const h3 = document.createElement('h3');
  h3.classList.add('laps__item-number');
  h3.innerText = '#' + lapCounter;

  li.append(h3);

  li.append(getLapItemTimeHTML(countMiliseconds - lapTimeMS));
  li.append(getLapItemTimeHTML(countMiliseconds));

  return li;
}

function handleLap() {
  document.querySelector('.laps__list').prepend(getLapItemHTML());
  lapTimeMS = countMiliseconds;
  lapCounter++;
}

function cleanLaps() {
  document.querySelector('.laps__list').innerHTML = '';
  lapCounter = 0;
}
