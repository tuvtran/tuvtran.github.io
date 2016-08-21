$(document).ready(function() {
  $(".icons").hover(function() {
    $(this).addClass("animated rubberBand");
  }, function() {
    $(this).removeClass("animated rubberBand");
  });

  $(".icons").click(function() {
    $(this).addClass("animated flip");
  });

  $("#info").click(function() {
    $("#bio").css("display", "block");
    $("#main-header").animate({
      "margin-top": "60px"
    });
  });

  $("#close-bio").hover(function() {
    $(this).addClass("animated flip");
  }, function() {
    $(this).removeClass("animated flip");
  });

  $("#close-bio").click(function() {
    $("#bio").css("display", "none");
    $("#main-header").animate({
      "margin-top": "15%"
    });
  });
});