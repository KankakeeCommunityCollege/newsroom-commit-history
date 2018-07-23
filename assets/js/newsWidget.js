// CUSTOM JS FOR LATEST-NEWS-WIDGET
$(document).ready(function () {
  var img1 =  $('#latestNewsImage1').attr('src');
  var img2 =  $('#latestNewsImage2').attr('src');
  var img3 =  $('#latestNewsImage3').attr('src');
  var img4 =  $('#latestNewsImage4').attr('src');

  var link1 =  $('#jsNewsLink1').attr('href');
  var link2 =  $('#jsNewsLink2').attr('href');
  var link3 =  $('#jsNewsLink3').attr('href');
  var link4 =  $('#jsNewsLink4').attr('href');

  $('.js-hp-feature').addClass('topper-trans-in');
  $('.js-play-icon').addClass('topper-trans-in');

  function jsNewsLinkFunction() {
    var jsNewsLinks = [ $('#jsNewsLink1'), $('#jsNewsLink2'), $('#jsNewsLink3'), $('#jsNewsLink4') ];
    for (var i = 0; i < jsNewsLinks.length; i++) {
      jsNewsLinks[i].removeClass('topper-trans-in');
      jsNewsLinks[i].addClass('topper-trans-out');
    }
  }
  function jsPlayIcon() {
    var jsPlayButtons = [ $('#playIcon1'), $('#playIcon2'), $('#playIcon3'), $('#playIcon4'), ];
    for (var i = 0; i < jsPlayButtons.length; i++) {
      jsPlayButtons[i].removeClass('topper-trans-in');
      jsPlayButtons[i].addClass('topper-trans-out');
    }
  }
  $('#jsTeaseLink1').mouseenter(function() {
  // When mouse enters jsTeaseLink1 do this:
  //  $('.js-hp-feature').removeClass('topper-trans-in');
  //  $('.js-hp-feature').addClass('topper-trans-out');

    jsNewsLinkFunction();
    jsPlayIcon();

    $('#jsNewsLink1').removeClass('topper-trans-out');
    $('#jsNewsLink1').addClass('topper-trans-in');

    $('#playIcon1').removeClass('play-zoom-out').removeClass('topper-trans-out');
    $('#playIcon1').addClass('topper-trans-in');

    // set jsTeaseLink1 aria-hidden attribute's value to "false":
    $('#jsTeaseLink1').attr('aria-hidden', 'false');
    $('#jsNewsLink1').attr('aria-hidden', 'false');

    $('#jsTeaseList').find('.tease-is-active').removeClass('tease-is-active');
    $('#jsTeaseLink1').addClass('tease-is-active');

    // set all other aira-hidden atrribute values to "true":
    $('#jsTeaseLink2').attr('aria-hidden', 'true');
    $('#jsTeaseLink3').attr('aria-hidden', 'true');
    $('#jsTeaseLink4').attr('aria-hidden', 'true');
    $('#jsNewsLink2').attr('aria-hidden', 'true');
    $('#jsNewsLink3').attr('aria-hidden', 'true');
    $('#jsNewsLink4').attr('aria-hidden', 'true');

    // set js-hp-feature--img-mod style to background image:
    $('.js-hp-feature--img-mod').css('background-image', 'url("' + img1 + '")');
    $('.js-hp-topper-img').attr('src', img1);
    $('.js-hp-feature').attr('href', link1);

    $('.latest-news-widget__feature-mod--inner').css({ transform: 'translate3d(0%, 0, 0)' });
  });

  $('#jsTeaseLink2').mouseenter(function() {
  // When mouse enters jsTeaseLink1 do this:
  //  $('.js-hp-feature').removeClass('topper-trans-in');
  //  $('.js-hp-feature').addClass('topper-trans-out');

    jsNewsLinkFunction();
    jsPlayIcon();

    $('#jsNewsLink2').removeClass('topper-trans-out');
    $('#jsNewsLink2').addClass('topper-trans-in');

    $('#playIcon2').removeClass('play-zoom-out').removeClass('topper-trans-out');
    $('#playIcon2').addClass('topper-trans-in');

    // set jsTeaseLink1 aria-hidden attribute's value to "false":
    $('#jsTeaseLink2').attr('aria-hidden', 'false');
    $('#jsNewsLink2').attr('aria-hidden', 'false');

    $('#jsTeaseList').find('.tease-is-active').removeClass('tease-is-active');
    $('#jsTeaseLink2').addClass('tease-is-active');

    // set all other aira-hidden atrribute values to "true":
    $('#jsTeaseLink1').attr('aria-hidden', 'true');
    $('#jsTeaseLink3').attr('aria-hidden', 'true');
    $('#jsTeaseLink4').attr('aria-hidden', 'true');
    $('#jsNewsLink1').attr('aria-hidden', 'true');
    $('#jsNewsLink3').attr('aria-hidden', 'true');
    $('#jsNewsLink4').attr('aria-hidden', 'true');

    // set js-hp-feature--img-mod style to background image:
    $('.js-hp-feature--img-mod').css('background-image', 'url("' + img2 + '")');
    $('.js-hp-topper-img').attr('src', img2);
    $('.js-hp-feature').attr('href', link2);

    $('.latest-news-widget__feature-mod--inner').css({ transform: 'translate3d(-25%, 0, 0)' });
  });

  $('#jsTeaseLink3').mouseenter(function() {
  // When mouse enters jsTeaseLink1 do this:
  //  $('.js-hp-feature').removeClass('topper-trans-in');
  //  $('.js-hp-feature').addClass('topper-trans-out');

    jsNewsLinkFunction();
    jsPlayIcon();

    $('#jsNewsLink3').removeClass('topper-trans-out');
    $('#jsNewsLink3').addClass('topper-trans-in');

    $('#playIcon3').removeClass('play-zoom-out').removeClass('topper-trans-out');
    $('#playIcon3').addClass('topper-trans-in');

    // set jsTeaseLink1 aria-hidden attribute's value to "false":
    $('#jsTeaseLink3').attr('aria-hidden', 'false');
    $('#jsNewsLink3').attr('aria-hidden', 'false');

    $('#jsTeaseList').find('.tease-is-active').removeClass('tease-is-active');
    $('#jsTeaseLink3').addClass('tease-is-active');

    // set all other aira-hidden atrribute values to "true":
    $('#jsTeaseLink1').attr('aria-hidden', 'true');
    $('#jsTeaseLink2').attr('aria-hidden', 'true');
    $('#jsTeaseLink4').attr('aria-hidden', 'true');
    $('#jsNewsLink1').attr('aria-hidden', 'true');
    $('#jsNewsLink2').attr('aria-hidden', 'true');
    $('#jsNewsLink4').attr('aria-hidden', 'true');

    // set js-hp-feature--img-mod style to background image:
    $('.js-hp-feature--img-mod').css('background-image', 'url("' + img3 + '")');
    $('.js-hp-topper-img').attr('src', img3);
    $('.js-hp-feature').attr('href', link3);

    $('.latest-news-widget__feature-mod--inner').css({ transform: 'translate3d(-50%, 0, 0)' });
  });

  $('#jsTeaseLink4').mouseenter(function() {
  // When mouse enters jsTeaseLink1 do this:
  //  $('.js-hp-feature').removeClass('topper-trans-in');
  //  $('.js-hp-feature').addClass('topper-trans-out');

    jsNewsLinkFunction();
    jsPlayIcon();

    $('#jsNewsLink4').removeClass('topper-trans-out');
    $('#jsNewsLink4').addClass('topper-trans-in');

    $('#playIcon4').removeClass('play-zoom-out').removeClass('topper-trans-out');
    $('#playIcon4').addClass('topper-trans-in');

    // set jsTeaseLink1 aria-hidden attribute's value to "false":
    $('#jsTeaseLink4').attr('aria-hidden', 'false');
    $('#jsNewsLink4').attr('aria-hidden', 'false');

    $('#jsTeaseList').find('.tease-is-active').removeClass('tease-is-active');
    $('#jsTeaseLink4').addClass('tease-is-active');

    // set all other aira-hidden atrribute values to "true":
    $('#jsTeaseLink1').attr('aria-hidden', 'true');
    $('#jsTeaseLink2').attr('aria-hidden', 'true');
    $('#jsTeaseLink3').attr('aria-hidden', 'true');
    $('#jsNewsLink1').attr('aria-hidden', 'true');
    $('#jsNewsLink2').attr('aria-hidden', 'true');
    $('#jsNewsLink3').attr('aria-hidden', 'true');

    // set js-hp-feature--img-mod style to background image:
    $('.js-hp-feature--img-mod').css('background-image', 'url("' + img4 + '")');
    $('.js-hp-topper-img').attr('src', img4);
    $('.js-hp-feature').attr('href', link4);

    $('.latest-news-widget__feature-mod--inner').css({ transform: 'translate3d(-75%, 0, 0)' });
  });

  $('#featureHover').mouseenter(function () {
    $('.js-play-icon').removeClass('play-zoom-out').addClass('play-zoom-in');
  });
  $('#featureHover').mouseleave(function () {
    $('.js-play-icon').removeClass('play-zoom-in').addClass('play-zoom-out');
  });

});
