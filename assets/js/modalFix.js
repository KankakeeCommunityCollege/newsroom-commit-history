// Fix for Bootstrap 4's issues displaying modals with fixed navigation
$(document).ready(function(){
  var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
    widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
  $outer.remove();
  var scrollBarWidth = 100 - widthWithScroll;

  $('.modal').on('shown.bs.modal', function () {
    $('body').css('padding-right', '0');
    $('#mainNav').css('padding-right', '1rem');
    $('#globalNav').css('padding-right', '1rem');
  });

  $('.modal').on('shown.bs.modal', function () {
    $(this).trigger('focus');
  });


//  $('body').find('[data-toggle="modal"]').on('click', function () {
//    if ($('body').hasClass('modal-open') != true) {
//      console.log("modal open");
//      $('body').css('margin-right', '-' + scrollBarWidth + 'px');
//    } else {
//      $('body').css('margin-right', '0');
//      console.log("modal closed")
//    }
//  });
//  $('body').find('[data-dismiss="modal"]').on('click', function () {
//    if ($('body').hasClass('modal-open') != true) {
//      console.log("modal open");
//      $('body').css('margin-right', '-' + scrollBarWidth + 'px');
//    } else {
//      $('body').css('margin-right', '0');
//      console.log("modal closed")
//    }
//  });
//  console.log(scrollBarWidth);
});
