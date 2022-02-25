var $userList = document.querySelector('#user-list');
var xhrUser = new XMLHttpRequest();
xhrUser.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhrUser.responseType = 'json';
xhrUser.addEventListener('load', function () {
  console.log(xhrUser.status);
  console.log(xhrUser.response);
  for (var i = 0; i < xhrUser.response.length; i++) {
    var listedElement = document.createElement('li');
    listedElement.textContent = xhrUser.response[i].name;
    $userList.appendChild(listedElement);
  }
});
xhrUser.send();
