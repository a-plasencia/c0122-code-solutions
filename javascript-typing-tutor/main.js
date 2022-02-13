/*
Make a function that allows somebody to type a word, and lets them know when they type it
right or wrong.
-Get a reference to all the spans in the list.
-make a storage for the index
-have an underline for the first letter
-if the key is pressed correctly, make that text green, increment the index,
then put an underline on the letter
-if the key is wrong, then make that letter and the underline red
*/

var $span = document.querySelectorAll('span');
var i = 0;
function typeLetter(event) {
  if ($span[i].textContent === event.key) {
    $span[i].className = 'text green';
    i++;
    $span[i].className = 'underline';
  } else {
    $span[i].className = 'underline red text red';
  }
}

document.addEventListener('keydown', typeLetter);

// The following console.log call's work as intended
// console.log('the event.key value is', event.key);< it does register my key presses
// console.log('the nodelist of $span is: ', $span); < I get a nodelist of every letter
// console.log('the value of $span[i] is: ', $span[i]); < successfully gets the letter asked for
// console.log('the values of $span[i].text content and event.key are the same');
