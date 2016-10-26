var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var owm = require('OpenWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return{
            isLoading: false
        }
    },
    handleSearch:function(city){
        var self = this;

        //debugger;
        this.setState({isLoading:true});
        owm.getTemp(city).then(function(temp){
            self.setState({
                city: city,
                temp: temp,
                isLoading: false
            });            
        },function(errMsg){
            console.log('err :', errMsg);
            alert(errMsg);
            self.setState({
                isLoading:false,
                city:undefined,
                temp:undefined
            });
        });
    },
    render: function(){
        var {city, temp, isLoading} = this.state;
        
        function renderMessage(){
            
            if(isLoading){
                return <h3>Fetching weather...</h3>;
            }
            else  if(temp && city){
               return <WeatherMessage city={city} temp={temp}/>;
            }
        }

        return(
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});
module.exports = Weather;
