let count = 3;
function countdown() {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(interval);
  }
  if (count !== 0) {
    console.log(count);
  }
  count--;
}

const interval = setInterval(countdown, 1000);
