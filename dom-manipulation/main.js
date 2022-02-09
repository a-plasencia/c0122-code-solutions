/*
Have a button that when clicked a counter increments.  Then as the clicks go up,
have the button change colors.

Create a storage for storedClicks
Have a reference for the hot button button
Have a reference for the click counter class itself
Make a function, where when somebody clicks the button.  The storedClicks counter
goes up by 1.
Make the text content of click counter include the stored counter
As the number goes up, check how many clicks their are, and then have the button
change color.
*/

var storedClicks = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');
function clickHotButton(event) {
  storedClicks++;
  $clickCount.textContent = 'Clicks: ' + storedClicks;
  if (storedClicks === 4) {
    $hotButton.className = 'hot-button cool';
  } else if (storedClicks === 7) {
    $hotButton.className = 'hot-button tepid';
  } else if (storedClicks === 10) {
    $hotButton.className = 'hot-button warm';
  } else if (storedClicks === 13) {
    $hotButton.className = 'hot-button hot';
  } else if (storedClicks === 16) {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', clickHotButton);
