// Shrink the local navbar when you scroll down
// (navbar scroll effects)
var navbarCollapse = function() {
  if ($('#mainNav').offset().top > 100) {
    $('#mainNav').addClass('navbar-shrink');
  } else {
    $('#mainNav').removeClass('navbar-shrink');
  }
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);
