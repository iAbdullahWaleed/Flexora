$(document).ready(function() {
  var hightofwindow = $(window).height();
  $('.container > div').css('height',hightofwindow);
  $('.box').css('marginTop',(hightofwindow - $('.box').height()) / 2)
  // Resize Code
  $(window).on('resize',function() {
    var hightofwindow = $(window).height();
    $('.container > div').css('height',hightofwindow);
    $('.box').css('marginTop',(hightofwindow - $('.box').height()) / 2)
  })
})
