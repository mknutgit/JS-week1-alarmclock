exports.currentTime = function()
{

  var currentTime = $('.container');

  currentTime.find("p").html("Time:" + moment().format('HH:mm:ss '));

};

exports.compareTime = function(currentTime, alarmTime)
{
 if (currentTime == alarmTime) {
   alert('yo!');
 }

};
