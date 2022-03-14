var $circleContainer = document.querySelector('.circle-container');
var $circles = document.querySelectorAll('.fa-circle');
var $images = document.querySelectorAll('.object-cover');
var $previous = document.querySelector('.fa-less-than');
var $next = document.querySelector('.fa-greater-than');
var imageCounter = 0;
var interval = null;
function nextArrow(event) {
  if (event.target && event.target.matches('.fa-greater-than')) {
    $images[imageCounter].className = 'object-cover hidden';
    $circles[imageCounter].className = 'far fa-circle';
    imageCounter++;
    if (imageCounter === $images.length) {
      imageCounter = 0;
    }
    $images[imageCounter].className = 'object-cover';
    $circles[imageCounter].className = 'fas fa-circle';
    clearInterval(interval);
    interval = setInterval(carouselTimer, 3000);
  }
}

function previousArrow(event) {
  if (event.target && event.target.matches('.fa-less-than')) {
    $images[imageCounter].className = 'object-cover hidden';
    $circles[imageCounter].className = 'far fa-circle';
    if (imageCounter === 0) {
      imageCounter = $images.length;
    }
    imageCounter--;
    $images[imageCounter].className = 'object-cover';
    $circles[imageCounter].className = 'fas fa-circle';
    clearInterval(interval);
    interval = setInterval(carouselTimer, 3000);
  }
}

function circlesClicked(event) {
  if (event.target && event.target.matches('.fa-circle')) {

    for (var i = 0; i < $circles.length; i++) {
      if ($circles[i] === event.target) {
        $circles[i].className = 'fas fa-circle';
        $images[i].className = 'object-cover ';
        imageCounter = i;
      } else {
        $circles[i].className = 'far fa-circle';
        $images[i].className = 'object-cover hidden';
      }
    }
    clearInterval(interval);
    interval = setInterval(carouselTimer, 3000);
  }
}

function carouselTimer() {
  $images[imageCounter].className = 'object-cover hidden';
  $circles[imageCounter].className = 'far fa-circle';
  imageCounter++;
  if (imageCounter === $images.length) {
    imageCounter = 0;
  }
  $images[imageCounter].className = 'object-cover';
  $circles[imageCounter].className = 'fas fa-circle';
}

interval = setInterval(carouselTimer, 3000);
$next.addEventListener('click', nextArrow);
$previous.addEventListener('click', previousArrow);
$circleContainer.addEventListener('click', circlesClicked);
