var apiKey = "dbf2c9049b26489186f49538b6d32c90";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      console.log(response);

      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%" );

      var tempF = Math.round(response.main.temp * (9/5) - 459.67);

      $('.showTemperature').text("The temp in " + city + " is " + tempF + " degrees F" );
    });

  });
});
