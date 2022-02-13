/*
-get a reference for the red and blue buttons
-Have a function where when the blue button is clicked, a popup pops up
if the red button is clicked, the popup goes away
-Get a reference for the overlay, since that's the popup itself.
*/

var $overlay = document.querySelector('.overlay-hidden');
var $blueButton = document.querySelector('.blue-button');
var $redButton = document.querySelector('.red-button');
function clickedAButton(event) {
  if (event.target && event.target.matches('.blue-button')) {
    $overlay.className = '.row popup';
  }
  if (event.target && event.target.matches('.red-button')) {
    $overlay.className = '.row overlay-hidden';
  }
}

$blueButton.addEventListener('click', clickedAButton);
$redButton.addEventListener('click', clickedAButton);
