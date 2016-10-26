var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=cdc53c14a7c5913991f39c1cb532aa70&units=metric&lang=zh_cn';
// cdc53c14a7c5913991f39c1cb532aa70
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=
module.exports = {
    getTemp:function(city){
        var encodedLoc = encodeURIComponent(city)
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLoc}`;

        return axios.get(requestUrl).then(function(response){
            
            if(response.data.cod && response.data.message){
                throw new Error(response.data.message);
            }
            else{
                return response.data.main.temp;
            }
        },function(response){
            throw new Error(response.data.message);

        });
    }
}