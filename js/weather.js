//used to fetch and render weather conditions
var demoWeather = {
  "place": "Maribor",
  "country": "SI",
  "code": 33,
  "temp": -22,
  "wind": 25.8,
  "humidity": 64,
  "units":{
    "temperature": "°C",
    "speed": "m/s"
  }
}

var render = function(weather){
  $("#place").html(weather.place);
  $("#country").html(weather.country);
  var wCode = wImage(weather.code);
  rSkycon(wCode[1]);
  $("#cTemp").html(weather.temp + weather.units.temperature);
  $("#cWind").html(weather.wind + weather.units.speed);
  $("#cHumid").html(weather.humidity + '%');
}

var rSkycon = function(name){
  var icons = new Skycons();
  icons.set("skycon", name);
  icons.play();
}

var wImage = function(code){
    dict = {
      0: ["tornado", "wind"],
      1: ["tornado", "wind"],
	  2: ["tornado", "wind"],
      3: ["lightning", "cloud"],
      4: ["lightning", "rain"],
      5: ["sleet", "sleet"],
      6: ["sleet", "sleet"],
      7: ["sleet", "sleet"],
      8: ["drizzle", "rain"],
      9: ["drizzle", "rain"],
      10: ["rain", "rain"],
      11: ["rain", "rain"],
      12: ["rain", "rain"],
      13: ["snow", "snow"],
      14: ["snow", "snow"],
      15: ["snow", "snow"],
      16: ["snow", "snow"],
      17: ["hail", "sleet"],
      18: ["sleet", "sleet"],
      19: ["fog", "fog"],
      20: ["fog", "fog"],
      21: ["fog", "fog"],
      22: ["fog", "fog"],
      23: ["wind", "wind"],
      24: ["wind-cloud", "wind"],
      25: ["cold", "cloud"],
      26: ["cloudy", "cloud"],
      27: ["partly-cloudy", "partly-cloudy-night"],
      28: ["partly-cloudy", "partly-cloudy-day"],
      29: ["partly-cloudy", "partly-cloudy-night"],
      30: ["partly-cloudy", "partly-cloudy-day"],
      31: ["sun", "clear-night"],
      32: ["sun", "clear-night"],
      33: ["sun", "clear-day"],
      34: ["sun", "clear-day"],
      35: ["hail", "sleet"],
      36: ["hot", "sun"],
      37: ["lightning", "cloud"],
      38: ["lightning", "cloud"],
      39: ["lightning", "cloud"],
      40: ["snow", "snow"],
      41: ["snow", "snow"],
      42: ["snow", "snow"],
      43: ["snow", "snow"],
      44: ["partly-cloudy", "partly-cloudy-day"],
      45: ["lightning", "rain"],
      46: ["sleet", "sleet"],
      47: ["lightning", "rain"],
      3200: ["n-a", "n-a"]
    };
    return dict[code];
}
