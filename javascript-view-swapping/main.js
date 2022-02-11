var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');
function changeTabs(event) {
  if (event.target && event.target.matches('.tab')) {
    var getData = event.target.getAttribute('data-view');
    for (var j = 0; j < $view.length; j++) {
      if ($view[j].getAttribute('data-view') === getData) {
        $view[j].className = 'view';
      } else {
        $view[j].className = 'view hidden';
      }
    }
    for (var i = 0; i < $tabs.length; i++) {
      if ($tabs[i] === event.target) {
        $tabs[i].className = 'tab active';
      } else {
        $tabs[i].className = 'tab';
      }
    }
  }
}

$tabContainer.addEventListener('click', changeTabs);
