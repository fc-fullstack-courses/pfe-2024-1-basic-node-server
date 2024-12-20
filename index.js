const http = require('http');

// функція, що зпускається при надхоженні запиту на сервер
function requestListener (request, response) {
  console.log(request); // об'єкт запита клієнта
  console.log(response); // об'єкт відповіді сервера

  // посилаємо відповідь кліенту який робив запит
  // має бути рядком і має бути обов'язково присутнім
  response.end('Thanks for visiting!');
}

// створюємо екземпляр сервера
const server = http.createServer(requestListener);

// console.log(server);

const PORT = 5000;

// запуск сервера
server.listen(PORT);