"use strict";

/*
|--------------------------------------------------------------------------
| Websocket
|--------------------------------------------------------------------------
|
| This file is used to register websocket channels and start the Ws server.
| Learn more about same in the official documentation.
| https://adonisjs.com/docs/websocket
|
| For middleware, do check `wsKernel.js` file.
|
*/

const Ws = use("Ws");
Ws.channel("chat", "ChatController");

// Ws.channel("chat", ({ socket }) => {
//   console.log("Usuário entrou com o id %s", socket.id);
// });

// Ws.channel("news", ({ socket }) => {
//   console.log("a new subscription for news topic");
// });
