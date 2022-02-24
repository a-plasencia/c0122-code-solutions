var $h1 = document.querySelector('.message');

function changeTextDelay() {
  $h1.textContent = 'Hello There';
}

setTimeout(changeTextDelay, 2000);
