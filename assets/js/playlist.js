// Custom YouTube playlist used on videos.html page
var default_user_name = "kankakeecommcollege";
selectChannel(default_user_name);
/* API shits */
function selectChannel(user_name) {
  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/channels",
    type: "GET",
    dataType: "json",
    data: {
      part: "contentDetails",
      forUsername: user_name,
      key: $("meta[name=yt-api-k]").attr("value")
    },
    success: function(d) {
      $("#yt_list").html("");
      if (d.pageInfo.totalResults > 0) {
        console.dir(d.items);
        for (var _i = 0, _a = d.items; _i < _a.length; _i++) {
          var item = _a[_i];
          var uploads = "PLEnNvZd4X-lVSveRGpbsXLCmf7hYXX97q";
          getVideos(uploads);
        }
      } else {
        $("input#user_name").addClass("error");
        $("div#channel_input > .info")
          .show()
          .html("This user not exists");
      }
    },
    error: function(x) {
      console.dir(x);
    }
  });
}

//function getVideos(yt_id, next_page = "") {
function getVideos(yt_id) {
  var limit = 8;
  var more = "";
  var xhr = $.ajax({
    url: "https://www.googleapis.com/youtube/v3/playlistItems",
    type: "GET",
    dataType: "json",
    data: {
      part: "snippet",
      playlistId: "PLEnNvZd4X-lVFQK8Ke8jkpr7NvdTSI5W9",
      maxResults: limit,
//      pageToken: next_page,
      key: $("meta[name=yt-api-k]").attr("value")
    },
    success: function(data) {
//      console.dir(data);
//      if (data.nextPageToken) {
//        console.log(data.nextPageToken);
//        more =
//          '<button id="load-more" data-next-page="' +
//          data.nextPageToken +
//          '" data-yt-id="' +
//          yt_id +
//          '">More...</button>';
//      }
//      if (next_page === "") {
      $("#yt_player").attr(
        'src',
        'https://youtube.com/embed/' +
        data.items[0].snippet.resourceId.videoId +
        '?controls=1&showinfo=0&rel=0'
      );
      // Set allow="autoplay; encrypted-media"
      $("#yt_player").attr(
        'allow',
        'autoplay; encrypted-media'
      );
//      }
      for (var i = 0; i < limit; i++) {
        var counter = '<span id="count' + (i + 1) + '" class="latest-news-widget__latest__tease__number playlist__count">' + (i + 1) + '</span>';
        var more = '<div class="playlist__more-btn--wrapper"><a class="btn btn-danger playlist__more-btn buttons__custom-danger" href="https://www.youtube.com/channel/UCpolj7IezPpI0zv6tFcmEJw?sub_confirmation=1" target="_blank" rel="noopener"><img src="https://news.kcc.edu/assets/img/youtube-white.svg" class="buttons__yt-subscribe" alt="">&nbsp;Subscribe</a>&nbsp;<a class="btn btn-primary playlist__more-btn" href="https://www.youtube.com/playlist?list=PLEnNvZd4X-lVFQK8Ke8jkpr7NvdTSI5W9" target="_blank" rel="noopener">More Newsroom Videos</a></div>'
        var title = $('<h3 class="playlist__title playlist__title--shift">').append(data.items[i].snippet.title);
        var thumb = $("<img>").attr(
          "src",
          data.items[i].snippet.thumbnails.medium.url
        );
        //var playSymbol = $("<img class='float-left playlist__blue-play'>").attr(
        //  'src',
        //  'http://news.kcc.edu/assets/img/blue-play.svg'
        //);
        var video_id = data.items[i].snippet.resourceId.videoId;
        var holder = $("<div class='yt-item'>")
          .append(counter)
          .append(thumb)
          //.append(playSymbol)
          .append(title);
        var link = $('<a data-videoid="' + video_id + '" class="video-link" href="#">')
          .data("videoid", video_id)
          .append(holder);
        $("#yt_list").append(link);
      }
      $("#yt_list").append(more);
    }
  });
  console.dir(xhr);
}

/* load more shits */
//$("#yt_list").on("click", "#load-more", function() {
//  $(this)
//    .animate({
//        "transform": "scaleX(4)",
//        "opacity": "0.1"
//      },
//      function() {
//        getVideos($(this).data("yt-id"), $(this).data("next-page"));
//        $(this).remove();
//      });
//});

/* embeds shits */
//$("#yt_list").on("click", "a.video-link", function() {
  //function findCount() {
  //  $('this').find('[id*="count"]')
  //    .console.log('count found');
  //}

//  var video_id = $(this).data("videoid");
//  $("#yt_player").attr(
//    "src",
//    "https://youtube.com/embed/" +
//    video_id
//  );
//});

/* UI shits */
$("#user_name").on({
  keyup: function(e) {
    $(this).removeClass("error");
    $("div#channel_input > .info")
      .hide()
      .html("");
    if (e.keyCode === 13) {
      selectChannel($(this).val());
    }
  },
  click: function() {
    $(this).removeClass("error");
    $("div#channel_input > .info")
      .hide()
      .html("");
    $("#user_name").select();
  }
});
$("#sbm").on("click", function() {
  selectChannel($("#user_name").val());
});
$(window).on("load", function() {
  $("#user_name").val(default_user_name);
  $("#user_name").focus();
});
// lazy load
$("#yt_list").on("scroll", function() {
  if (
    Math.round($(this).scrollTop() + $(this).innerHeight(), 10) >=
    Math.round($(this)[0].scrollHeight, 10) - 5
  );
  //{
  //  $("#load-more").trigger("click");
  //}
});

//  var playTrigger = $('body').find('.video-link');
$("#yt_list").on("click", "a.video-link", function() {
//  playTrigger.click(function() {
  var theVideoId = $(this).data( 'videoid' );
  var iframePlay =  'https://youtube.com/embed/' + theVideoId + '?controls=1&showinfo=0&rel=0&autoplay=1';
  //var theModal = $(this).data( 'target' );
  //var theSource = $(theModal).find('iframe').attr('src');
  //var autoSource = $(theModal).find('iframe').attr('src') + '?rel=0&autoplay=1';
  //$('#yt_player').find('[src*="?controls=1&showinfo=0&rel=0&autoplay=1"]').attr('src', );
  $('#yt_player').attr('src', iframePlay);
  //$(theModal).find('[id*="iframe"]').attr('src', autoSource);
  //$(theModal).on('hidden.bs.modal', function () {
  //  $(theModal).find('[id*="iframe"]').attr('src', theSource);
  //});
});
