var moment = require("moment");

exports.currentTime = function() // display current time
{
  var currentTime = $('.container');

  currentTime.find("p").html("Time:" + moment().format('HH:mm '));

};

exports.compareTime = function(currentTime, alarmTime)
{
 if (currentTime == alarmTime) {
   alert('yo!');
 }

};
