const express = require("express")

const app = express();

app.get('/', function(request,response){
    response.send("Hello Express");
})

app.listen(8000, function(){
    console.log("Listening to 8000")
})

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})
