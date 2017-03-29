//Dependencies
var express = require('express'),
    Routes = require ('./config/routes.js'),
    BodyParser = require('body-parser'),
    Promise = require("bluebird"),
    Path = require('path'),
    
//Express    
app = express();

//Add Body Parser
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));

//Add static content directory (img, css, js, etc)
app.use(express.static(Path.join(__dirname, 'public')));

//Routes
app.use('/', Routes);
 
// Listen on port 3000
app.listen(process.env.PORT || 3000, function(){
    console.log("App running on port 3000!");
});

module.exports = app;