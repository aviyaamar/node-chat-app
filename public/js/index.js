var socket = io();

socket.on('connect', function() {
  console.log('conneceted to server');

  socket.emit('createMessage', {
    from: 'Aviya',
    text: 'yup, that works for me.'
  });
});

socket.on('disconnect' , function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('new message', message);
});
