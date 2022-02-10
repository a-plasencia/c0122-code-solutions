/*
Have a lightbulb that when clicked has the button and the body of the page go dark
If clicked when dark, become bright again
-Create a storage for seeing how many clicks have happened
-Have a reference for the button
-Have a reference for the outside rest of the page
-Make a function where when somebody clicks the button, the value of clicks changes
from true to false or vice versa
-If the clicks is false, make it dark, if it's true make it bright
-listen for when the button is called to call the function
*/

var clicks = true;
var $button = document.querySelector('.button');
var $body = document.querySelector('.body');

function clickTheButton(event) {
  clicks = !clicks;
  if (clicks === true) {
    $button.className = 'button';
    $body.className = 'body';
  } else {
    $button.className = 'button dark';
    $body.className = 'body dark';
  }
}
$button.addEventListener('click', clickTheButton);
