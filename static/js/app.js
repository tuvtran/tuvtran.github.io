$(document).ready(function() {
  $(".icons").hover(function() {
    $(this).addClass("animated rubberBand");
  }, function() {
    $(this).removeClass("animated rubberBand");
  });

  $(".icons").click(function() {
    $(this).addClass("animated flip");
  });
});