const express = require('express');
const parser = require('body-parser');
const path = require('path');
const port = process.env.Port || 8000;
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io').listen(server);
const Chat = require('./server/models/chat.js');

server.listen(4000);


io.on('connection', function (socket) {
  console.log('User connected');
  socket.on('disconnect', function() {
    console.log('User disconnected');
  });
  socket.on('save-message', function (data) {
    console.log('save-message',data);
    io.emit('new-message', { message: data });
  });
});


app.use(parser.urlencoded({extended:true}));
app.use(parser.json());
app.use(express.static(path.resolve('node_modules')));
app.use(express.static(path.resolve('public')));
app.use(express.static(path.join(__dirname, '/public/dist')));

app.use('/chat', Chat);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



require(path.resolve('server', 'config', 'database'));
require(path.resolve('server', 'config', 'routes'))(app);




app.listen(port, () => console.log(`server running on port ${ port }`));
