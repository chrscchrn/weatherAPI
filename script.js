$("#searchBtn").on("click", function(event) {

    // Preventing the submit button from trying to submit the form
    // We're optionally using a form so the user may hit Enter to search instead of clicking the button
    event.preventDefault();

    // Here we grab the text from the input box
    var citySearch = $("#citySearch").val();
    console.log(citySearch);
    // Here we construct our URL
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=044bf5c40d9646ffc4a73b7eb33e9266";

    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    
    // and display it in the div with an id of movie-view

    // YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE

    // =================================================================
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        console.log(response);

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
            console.log(response5);
            var day1TempK = response5.daily.0.temp.day;
            var day1Humidity = response5.daily.0.humidity;
            console.log(day1Temp);
            console.log(day1Humidity);
        });






        //$("#whereAndWhen").append(response.name);
        // $("#movie-view").append(`${JSON.stringify(response)}`);
    });
    // CODE GOES HERE

    // =================================================================
  });