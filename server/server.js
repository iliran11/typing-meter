const app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const createGame = require('../src/utils/gameUtils')

const games = [];

app.get('/', function(req, res) {
  res.send('<h1>Hello world</h1>');
});
io.on('connection', function(socket) {
     socket.on('ferret', (name, fn) => {
     fn('woot');
   });
});


http.listen(4000, function() {
  console.log('listening on *:4000');
});
