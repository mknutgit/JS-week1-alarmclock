
var currentTime = require('./../js/myjsfile.js').currentTime;
var compareTime = require('./../js/myjsfile.js').compareTime;

$(document).ready(function(event) {
  var alarmTime = null;

  currentTime();
  setInterval(currentTime, 1000);
  console.log('current ' + moment().format('HH:mm a'));

  $('#alarm-set').submit(function(event){
    event.preventDefault();
    alarmTime = $("[name=alarm]").val();
    console.log(alarmTime);
    console.log(moment().format("HH:mm"))

  });

  setInterval(function(){
    if (moment().format("HH:mm") === alarmTime) {
      alert("Get Up!");
    }
  }, 1000);

});
