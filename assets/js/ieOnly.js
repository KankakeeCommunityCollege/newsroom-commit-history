function GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");

    // If IE, return version number.
  if (Idx > 0) {
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));
  }
  // If IE 11 then look for Updated user agent string.
  else if (!!navigator.userAgent.match(/Trident\/7\./)) {
    return 11;
  }
  else {
    return 0; //It is not IE
  }
}

if (GetIEVersion() > 10) {
  console.log("This is IE " + GetIEVersion());
  $('[id*="jsTeaseLink"]').addClass('ie-only__no-flex');
  $('.latest-news-widget__latest__tease__img-mod--default').addClass('ie-only__float-right');
  $('.latest-news-widget__latest__tease__hgroup').addClass('ie-only__hgroup');
  //var howWide = $(window).innerWidth();
  //console.log(howWide);
}

var windowSize = $(window).innerWidth();
console.log(windowSize);
