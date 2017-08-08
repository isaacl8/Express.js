const express  =  require( "express");
const path  =  require( "path");

const app  =  express();
app. use(express.static(path. join(__dirname  +  "./static")));

app.set( 'views', path. join(__dirname,  './views'));

app.set( 'view engine',  'ejs');


app.get( '/', (req, res) => {
 res. render( "index");
})

const server = app. listen(8000, () => {
 console. log( "listening on port 8000");
})

const io = require( 'socket.io'). listen(server);

io.sockets. on( 'connection',  (socket) => {

  socket. on( "button_clicked", (data) => {
      socket. emit( 'server_response', {response:  "sockets are the best!"});
  })
})
