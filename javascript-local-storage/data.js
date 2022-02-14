/* exported todos */

var todos = [];
function grabLocalStorage(event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}
var previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) {
  previousTodosJSON = JSON.parse(previousTodosJSON);
  todos = previousTodosJSON;
}
window.addEventListener('beforeunload', grabLocalStorage);
