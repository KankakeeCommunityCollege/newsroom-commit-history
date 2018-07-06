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
  autoPlayModal();
});
