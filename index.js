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

let time = {
  minutes: 0,
  seconds: 0,
  miliseconds: 0,
}

document.querySelector('.start-btn').addEventListener('click', handleStart);
document.querySelector('.pause-btn').addEventListener('click', handlePause);
document.querySelector('.reset-btn').addEventListener('click', handleReset);

function handleStart() {
  intervalId = setInterval(function() {
    tickMiliseconds();
    showTime();
  }, 10);
}

function handlePause() {
    clearInterval(intervalId);
}

function handleReset() {
  clearInterval(intervalId);
  time.minutes = 0;
  time.seconds = 0;
  time.miliseconds = 0;
  showTime();
}

function tickMiliseconds() {
  if (time.miliseconds === 99) {
    time.miliseconds = 0;
    tickSeconds();
  } else {
    time.miliseconds++;
  }
}

function tickSeconds() {
  if (time.seconds === 59) {
    time.seconds = 0;
    tickMinutes();
  } else {
    time.seconds++;
  }
}

function tickMinutes() {
  time.minutes++;
}

function showTime() {
  minutes.innerText = time.minutes < 10 ? '0' + time.minutes + 'm' : time.minutes + 'm';
  seconds.innerText = time.seconds < 10 ? '0' + time.seconds + 's' : time.seconds + 's';
  miliseconds.innerText = time.miliseconds < 10 ? '0' + time.miliseconds + 'ms' : time.miliseconds + 'ms';
}
