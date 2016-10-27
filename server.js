//how to create a reactjs 
// npm init // create package.json
// npm install express --save // install the express component
// npm install // to recover if deleted the installed component in "dependencies"
// npm install --save-dev babel-loader babel-core
// npm install babel-preset-es2015 --save-dev
// npm install babel-preset-react --save-dev
// npm install webpack --save-dev
// npm install --save react react-dom


var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
    if (req.headers['x-forwarded-proto'] === 'http') {
        next();
    } else{
        res.redirect('http://' + req.hostname + req.url);
    }

});

app.use(express.static('public'));


app.listen(PORT, function(){
    console.log('Express is up on port '+PORT);
});