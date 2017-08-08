// require express and path
const express  =  require( "express");
const path  =  require( "path");

// create the express app
const app  =  express();

// static content
app. use(express.static(path. join(__dirname  +  "./static")));

// setting up ejs and our views folder
app.set( 'views', path. join(__dirname,  './views'));
app.set( 'view engine',  'ejs');

// root route to render the index.ejs view
app.get( '/', (req, res) => {
 res. render( "index");
})

// tell the express app to listen on port 8000
const server = app. listen(8000, () => {
 console. log( "listening on port 8000");
})
const io = require( 'socket.io'). listen(server);

// If you don't know where this code is supposed to go reread the above info


// Whenever a connection event happens (the connection event is built in) run the following code
io.sockets. on( 'connection',  (socket) => {
  console. log( "WE ARE USING SOCKETS!");
  console. log(socket.id);
 socket. on( "button_clicked", (data) => {
    console. log( 'Someone clicked a button!  Reason: '  + data.reason);
    socket.emit( 'server_response', {response:  "sockets are the best!"});
})
})
