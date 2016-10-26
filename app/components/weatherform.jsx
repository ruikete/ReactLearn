var React = require('react');
var WeatherForm = React.createClass({
    getWeather: function(e){
        e.preventDefault();

        console.log('this. get weather',this.refs.cityName.value);
        var city = this.refs.cityName.value;
        
        if(city.length > 0){
            this.refs.cityName.value = '';
            this.props.onSearch(city);
        }
    },
    render:function(){
        return(
            <form onSubmit={this.getWeather}>
                <div>
                    <input type="text" ref='cityName' placeholder='Enter city name'/>
                </div>
                <div>
                    <button>Get Weather</button>
                </div>
            </form>
        );
    }
});
module.exports=WeatherForm;
