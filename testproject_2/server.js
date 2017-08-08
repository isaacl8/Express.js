const express = require("express")

const app = express();

// app.HTTP_VERB('URL', function(req, res) {});

app.listen(8000, function() {
    console.log("Listening to 8000")
})

app.get('/', function(req, res) {
    res.render('index', {
        title: "my Express project"
    });
});
app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

// route to process new user form data:
app.post('/users', function(req, res) {
    console.log("POST DATA \n\n", req.body)
    //code to add user to db goes here!
    // redirect the user back to the root route.
    res.redirect('/')
})

app.get("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});

// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({
    extended: true
}));
