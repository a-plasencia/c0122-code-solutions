var $countdown = document.querySelector('.countdown-display');

var counter = 4;
function timer() {
  counter--;
  $countdown.textContent = counter;
  if (counter === 0) {
    $countdown.textContent = '~Earth Beeeeloooowwww Us~';
    clearInterval(countdown);
  }
}

var countdown = setInterval(timer, 1000);
