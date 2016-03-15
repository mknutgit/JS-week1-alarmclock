exports.currentTime = function()
{

  var currentTime = $('.container');

  currentTime.find("p").html("Time:" + moment().format('HH:mm:ss '));

};
