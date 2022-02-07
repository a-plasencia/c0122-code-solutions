function handleClick(event) {
  console.log('button clicked');
  console.log(' event:', event);
  console.log(' event.target:', event.target);
}

var $handleClick = document.querySelector('.click-button');

$handleClick.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(' event:', event);
  console.log(' event.target', event.target);
}

var $handleMouseover = document.querySelector('.hover-button');

$handleMouseover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(' event', event);
  console.log(' event.target', event.target);
}

var $handleDoubleClick = document.querySelector('.double-click-button');

$handleDoubleClick.addEventListener('dblclick', handleDoubleClick);
