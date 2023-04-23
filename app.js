const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let counter = 0;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('getCounter', function(callback) {
    // Increment the counter
    counter++;
  
    console.log(`Returning getCounter with counter ${counter}`);
    
    // Use a Node style callback (error, value)
    callback(null, counter);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});