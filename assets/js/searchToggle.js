var imgsrc = $('#searchImg').attr('src');
//function toggler() {
//  if (imgsrc.indexOf('assets/img/search.svg') != -1) {
//    console.log('true');
//    $('#searchImg').attr('src', 'assets/img/x.svg');
//  } else {
//    $('#searchImg').attr('src', 'assets/img/search.svg');
//    console.log('false');
//  }
//}
$('#searchIcon').click(function () {
  function searchCheck() {
    var imgUrl = $('#searchImg').css('background-image');
    if ( imgUrl.indexOf('assets/img/search.svg') != -1 ) {
//      $('#searchImg').css('background-image', '../../../../x.svg');
//      console.log('search');
      $('#searchImg').css('background-image', 'url("http://news.kcc.edu/assets/img/x.svg")');
    } else {
      $('#searchImg').css('background-image', 'url("http://news.kcc.edu/assets/img/search.svg")');
    }
  }
  searchCheck();
  $('#searchCollapse').toggleClass('global-nav__search-collapse--visible');
//  $('#searchImg').css('background-image', 'url('')')
//  toggler();
  $('#mainNav').toggleClass('local-nav--search-toggle');
  $('#globalNav').toggleClass('global-nav--search-toggle');
});
