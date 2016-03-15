
var currentTime = require('./../js/myjsfile.js').currentTime;
var compareTime = require('./../js/myjsfile.js').compareTime;

$(document).ready(function(event) {

  $('#submit-click').click(function(){
    var alarmTime = $("[name=alarm]").val();
    console.log('alarm ' + alarmTime);
    currentTime();
    compareTime(currentTime, alarmTime);
  });
  currentTime();
  setInterval(currentTime, 1000);
  console.log('current ' + moment().format('HH:mm'));


});
