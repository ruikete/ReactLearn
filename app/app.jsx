var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//var Rout = require('react-router').Route;
/*
var obj = {
    name : "Terry"
}
var {name} =  obj;
console.log('name:', name);
*/

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path="about" component={About}></Route>
            <Route path="examples" component={Examples}></Route>            
            <IndexRoute component={Weather}/>
        </Route>
    </Router>, 
    document.getElementById('app')
);