$(document).ready(function(){
  function autoPlayModal(){
    var trigger = $('body').find('[data-toggle="modal"]');
    trigger.click(function() {
      var theModal = $(this).data( 'target' );
      var theSource = $(theModal).find('iframe').attr('src');
      var autoSource = $(theModal).find('iframe').attr('src') + '?rel=0&autoplay=1';
      $(theModal).find('[id*="iframe"]').attr('src', autoSource);
      $(theModal).on('hidden.bs.modal', function () {
        $(theModal).find('[id*="iframe"]').attr('src', theSource);
      });
    });
  }
//  function stopModalNow() {
//    var fullPageButton = $('body').find('[id*="fullPageVideo"]');
//    fullPageButton.click(function() {
//      console.log('clicked!');
//      var theIframeTarget = $(this).data( 'iframetarget' );
//      var theIframeSrc = $(iframeTarget).attr('src');
//      var stopIframeSrc = theIframeSrc.replace('?rel=0&autoplay=1', '');
//      $(theIframeTarget).attr('src', stopIframeSrc);
//      console.log('play removed');
//    });
//  }
//  stopModalNow();
  autoPlayModal();
});

//$(document).one('load', function() {
//  var i;
//  for (i = 1; i < 5; i++) {
//    var iframeId = '#iframe' + i;
//    var iframeWithId = $(iframeId);
//    var idSrc = iframeWithId.attr('src');
//    if (idSrc.indexOf('?rel=0&autoplay=1') != -1) {
//      var stopSrc =  idSrc.replace('?rel=0&autoplay=1', '');
//      iframeWithId.attr('src', stopSrc);
//    }
//  }
//});

//$(document).one('ready', function() {
//  console.log('One function triggered!');
//  var iframe1 = $('#iframe1');
//  var iframe2 = $('#iframe2');
//  var iframe1 = $('#iframe3');
//  var iframe1 = $('#iframe4');
//  var src1 = iframe1.attr('src');
//  var src2 = iframe2.attr('src');
//  var src3 = iframe3.attr('src');
//  var src4 = iframe4.attr('src');
//  function iframePlayCheck() {
//    console.log('iframePlayCheck function initiated!');
//    if (src1.indexOf('?rel=0&autoplay=1') != -1) {
//      console.log('Modal 1 Playing!');
//      var stop1 = src1.replace('?rel=0&autoplay=1', '');
//      iframe1.attr('src', stop1);
//    } else if (src2.indexOf('?rel=0&autoplay=1') != -1) {
//      console.log('Modal 2 Playing!');
//      var stop2 = src2.replace('?rel=0&autoplay=1', '');
//      iframe2.attr('src', stop2);
//    } else if (src3.indexOf('?rel=0&autoplay=1') != -1) {
//      console.log('Modal 3 Playing!');
//      var stop3 = src3.replace('?rel=0&autoplay=1', '');
//      iframe3.attr('src', stop3);
//    } else if (src4.indexOf('?rel=0&autoplay=1') != -1) {
//      console.log('Modal 2 Playing!');
//      var stop4 = src4.replace('?rel=0&autoplay=1', '');
//      iframe4.attr('src', stop4);
//    }
//  }
//  iframePlayCheck();
//});
