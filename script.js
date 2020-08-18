var history = [];
localStorage.setItem("city", JSON.stringify(history));
history = JSON.parse(localStorage.getItem("city"));

$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    var citySearch = $("#citySearch").val();
    
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=044bf5c40d9646ffc4a73b7eb33e9266";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        var name = response.name;
        var humidity = response.main.humidity;
        var wind = response.wind.speed;
        var tempK = response.main.temp;
        var tempF = ((tempK - 273.15) * 1.80) + 32;
        var lat = response.coord.lat;
        var lon = response.coord.lon;
        
        var queryURL5Day = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=current,hourly,minutely&appid=" + "044bf5c40d9646ffc4a73b7eb33e9266";
        
        $.ajax({
          url: queryURL5Day,
          method: "GET"
        }).then(function(response5) {
          var UV = response5.daily[0].uvi;

          $(".display-4").text(name + " - " + moment().format('ll'));
          $(".currentTemp").text("Temperature: " + tempF.toFixed(0) + "F");
          $(".currentHumidity").text("Humidity: " + humidity + "%");
          $(".currentWind").text("Wind Speed: " + wind.toFixed(0) + "MPH");
          $(".currentUV").text("UV Index: " + UV);
          
          var day1TempK = response5.daily[1].temp.day;
          var day1Humidity = response5.daily[1].humidity;
          var day1TempF = ((day1TempK - 273.15) * 1.80) + 32;
          var day2TempK = response5.daily[2].temp.day;
          var day2Humidity = response5.daily[2].humidity;
          var day2TempF = ((day2TempK - 273.15) * 1.80) + 32;
          var day3TempK = response5.daily[3].temp.day;
          var day3Humidity = response5.daily[3].humidity;
          var day3TempF = ((day3TempK - 273.15) * 1.80) + 32;
          var day4TempK = response5.daily[4].temp.day;
          var day4Humidity = response5.daily[4].humidity;
          var day4TempF = ((day4TempK - 273.15) * 1.80) + 32;
          var day5TempK = response5.daily[5].temp.day;
          var day5Humidity = response5.daily[5].humidity;
          var day5TempF = ((day5TempK - 273.15) * 1.80) + 32;

          $(".add1").text(moment().add(1, 'days').format('l'));
          $(".add2").text(moment().add(2, 'days').format('l'));
          $(".add3").text(moment().add(3, 'days').format('l'));
          $(".add4").text(moment().add(4, 'days').format('l'));
          $(".add5").text(moment().add(5, 'days').format('l'));

          $(".day1temp").text(day1TempF.toFixed(0) + "F");
          $(".day2temp").text(day2TempF.toFixed(0) + "F");
          $(".day3temp").text(day3TempF.toFixed(0) + "F");
          $(".day4temp").text(day4TempF.toFixed(0) + "F");
          $(".day5temp").text(day5TempF.toFixed(0) + "F");

          $(".day1humidity").text(day1Humidity + "%");
          $(".day2humidity").text(day2Humidity + "%");
          $(".day3humidity").text(day3Humidity + "%");
          $(".day4humidity").text(day4Humidity + "%");
          $(".day5humidity").text(day5Humidity + "%");
          

        
        
    });
  });
});