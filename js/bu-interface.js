
var currentTime = require('./../js/myjsfile.js').currentTime;
var compareTime = require('./../js/myjsfile.js').compareTime;

$(document).ready(function(event) {
  $(".alarm-text").hide();
  var alarmTime = null;
  $('#alarm-set').submit(function(event){  //set alarm time..
    event.preventDefault();
    alarmTime = $("[name=alarm]").val();

    setInterval(function(){//checks moment time against alarm time every 1s
      if (moment().format("HH:mm") === alarmTime) {
        $('.alarm-text').show();
      }
    }, 1000);
  });

  currentTime();
  setInterval(currentTime, 1000);//refresh window with current time every s.

  $('#turn-off').submit(function(event){
    event.preventDefault();
    $(".alarm-text").hide();
    alarmTime = null; 
  });

});
