var currentTime = require('./../js/myjsfile.js').currentTime;

$(document).ready(function() {
  currentTime();
  setInterval(currentTime, 1000);

});
