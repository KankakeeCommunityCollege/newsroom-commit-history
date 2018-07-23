// Play a YouTube embed when you click it's modal link that opens it
$(document).ready(function(){
  function autoPlayModal(){
    var trigger = $('body').find('[data-toggle="modal"]');
    trigger.click(function() {
      var theModal = $(this).data( 'target' );
      var theVid = $(theModal).find('iframe').attr('data-theVideo');
      var playVid = theVid + '?rel=0&autoplay=1';
      //var theVid = $(theModal).find('iframe').data( 'theVideo' );
      //var theSource = $(theModal).find('iframe').attr('src');
      //var autoSource = $(theModal).find('iframe').attr('src') + '?rel=0&autoplay=1';
      $(theModal).find('[id*="iframe"]').attr('allow', 'autoplay; encrypted-media');
      $(theModal).find('[id*="iframe"]').attr('src', playVid);
      $(theModal).on('hidden.bs.modal', function () {
        $(theModal).find('[id*="iframe"]').attr('allow', '');
        $(theModal).find('[id*="iframe"]').attr('src', '');
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

  function stopVidNow() {
    var stopTrigger = $('body').find('[id*="fullPageVideo"]');
    stopTrigger.click(function() {
      var theIframe = $(this).data( 'iframetarget' );
      $(theIframe).attr('src', '');
    });
  }
  autoPlayModal();
  stopVidNow();
});

//$(document).ready(function() {
//  $('iframe').one('load', function() {
//    console.log('one success');
//    $('iframe').attr('allow', '');
//    console.log('disallow');
//  });
//});

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
