function checkForPound() {
  if (window.location.href.indexOf("#contact") > -1) {
      setTimeout(function () {
        var scrollBottom = $(document).height();
        //console.log(scrollBottom);
        window.scroll('0', scrollBottom);
      }, 1000);
  }
}
checkForPound();
