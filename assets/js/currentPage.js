// Highlights the current page in local navigation bar
$(document).ready(function () {
  var currentUrl = window.location.href;
  var noProto = currentUrl.replace(/(^\w+:|^)\/\//, '');
  $('#navbarSupportedContent').find('.active').removeClass('active');
  if (noProto == 'news.kcc.edu/') {
    $('#home').addClass('active');
  } else if (currentUrl.indexOf('/events/') > -1) {
    $('#events').addClass('active');
  } else if (currentUrl.indexOf('/news/') > -1) {
    $('#news').addClass('active');
  } else if (currentUrl.indexOf('/videos/') > -1) {
    $('#videos').addClass('active');
  }
});
