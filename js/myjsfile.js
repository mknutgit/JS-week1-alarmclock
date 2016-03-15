var moment = require("moment");

exports.currentTime = function() // display current time
{
  var currentTime = $('.container');

  currentTime.find("p").html("Time:" + moment().format('h:mm:ss a'));


};
