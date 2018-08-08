$(document).ready(function() { // Wait for document to load
  // Define variable to find  all our span elements with class  ".latest-news-widget__latest__tease__number"
  var spanNumber = $('.latest-news-widget__latest__tease__number');
  // Run a forloop on all the spans w/ ".latest-news-widget__latest__tease__number" class in the page.
  for (var i = 0; i < spanNumber.length; i++) {
    // Write the forloop's index (i) + 1 into it's innerHTML to show as the count number:
    spanNumber[i].innerHTML = i + 1;
  }
});
