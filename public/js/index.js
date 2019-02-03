var socket = io();

socket.on('connect', function() {
  console.log('conneceted to server');
});

socket.on('disconnect' , function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('new message', message);
});
