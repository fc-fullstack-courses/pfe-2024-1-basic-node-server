const http = require('http');

const users = [{ id: 0 }, { id: 1 }, { id: 2 }];

// функція, що зпускається при надхоженні запиту на сервер
function requestListener(request, response) {
  // console.log(request); // об'єкт запита клієнта
  // console.log(response); // об'єкт відповіді сервера

  // рядок методу з запиту
  const method = request.method;
  // рядок з шляхом на який було зроблшено запит у сервері (без хоста і порта)
  const path = request.url;

  if (method === 'GET') {
    if (path === '/users') {
      response.end(JSON.stringify(users));
    } else if (path === '/comments') {
      response.end(JSON.stringify([{ id: 0, text: 'bla bla bla' }]));
    }
  } else if (method === 'POST') {

    if(path === '/users') {
      let userJsonString = '';

      request.on('data', (chunk) => {
        userJsonString += chunk;
      });

      request.on('end', () => {
        const user = JSON.parse(userJsonString);

        // ...

        user.id = Date.now();

        users.push(user);

        response.end('User registered');
      });
    }
  }

  // посилаємо відповідь кліенту який робив запит
  // має бути рядком і має бути обов'язково присутнім
  // response.end(`Thanks for visiting! Your method was ${request.method}`);
}

// створюємо екземпляр сервера
const server = http.createServer(requestListener);

// console.log(server);

const PORT = 5000;

// запуск сервера
server.listen(PORT);
