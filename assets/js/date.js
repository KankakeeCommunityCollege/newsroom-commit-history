// SETS THE CURRENT DATE IN THE "LATEST-NEWS-WIDGET"
$(document).ready(function () {
  var dt = new Date();
  var time = dt.getMonth()+1 + '.' + dt.getDate();
  $('#todaysDate').html(time);
});
