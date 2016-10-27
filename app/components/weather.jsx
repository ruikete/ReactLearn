var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var owm = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function(){
        return{
            isLoading: false
        }
    },
    handleSearch:function(city){
        var self = this;

        //debugger;
        this.setState({isLoading:true,
            errorMessage: undefined
        });
        owm.getTemp(city).then(function(temp){
            self.setState({
                city: city,
                temp: temp,
                isLoading: false
            });            
        },function(errMsg){
            console.log('err :', errMsg);
            alert(errMsg.message);
            self.setState({
                isLoading:false,
                errorMessage: errMsg.message
            });
        });
    },
    render: function(){
        var {city, temp, isLoading,errorMessage} = this.state;
        
        function renderMessage(){
            
            if(isLoading){
                return <h3 className="text-center">Fetching weather...</h3>;
            }
            else  if(temp && city){
               return <WeatherMessage city={city} temp={temp}/>;
            }
        }
        function renderError(){
            if(typeof errorMessage === 'string'){
                return(
                    <ErrorModal/>
                );
            }
        }

        return(
            <div>
                <h3 className="text-center">Get Weather</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});
module.exports = Weather;
