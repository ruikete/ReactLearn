var React = require('react');

var WeatherMessage = React.createClass({
    render: function(){
        var {city, temp} = this.props;

        return(
            <h3>the City: {city}, and temprature is: {temp}</h3>
        );
    }
});
var WeatherMessage =({city, temp})=>(<h3>the City is {city}, and temprature is {temp}</h3>);
module.exports = WeatherMessage;
