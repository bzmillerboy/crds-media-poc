
$(document).ready(function () {
  
  $("#menu").mouseup(function () {
    $(this).toggleClass("active");
    $("#mobile-megamenu").toggleClass("open");
    $("#mobile-navbar").toggleClass("open");
  });

  $("#chat").click(function () {
    FrontChat('show');
  });

  

});

