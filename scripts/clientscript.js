var messages = [$('#message').val()];
$(function(){
  var socket = io();
  $('#message-form').submit(function(){
    socket.emit('chat message', $('#message').val());
    $('#message').val('');
    return false;
  });
    socket.on('chat message', function(msg){
      $('#message-form').append('<p>' + $('#message').val());
      messages.push(msg);
      $('#message-form').append('<p>' + messages[messages.length-1]);
  });
});
  