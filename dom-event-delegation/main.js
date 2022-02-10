var $taskList = document.querySelector('.task-list');

function checkTask(event) {
  console.log('event.target value is ', event.target);
  console.log('the event.target.tagName is', event.target.tagName);
  if (event.target && event.target.matches('button')) {
    var remove = event.target.closest('.task-list-item');
    console.log('closest .task-list-item', remove);
    remove.remove();
  }
}
$taskList.addEventListener('click', checkTask);
