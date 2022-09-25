async function getWeather(){
    //const response = await fetch('api.openweathermap.org/data/2.5/weather?q=London,uk&appid=6425b7df947268c09e6e0e80a94bff21', {mode: 'cors'});
    //const weatherData = await response.json();
    //console.log(weatherData);
    var key = '6425b7df947268c09e6e0e80a94bff21';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        console.log(data);
    })
    .catch(function() {
        // catch any errors
    });
}


getWeather();