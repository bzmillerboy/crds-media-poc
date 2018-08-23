
$(document).ready(function () {
  
  $("#menu").mouseup(function () {
    $(this).toggleClass("active");
    $("#nav-menu").toggleClass("open");
    $("#mobile-nav").toggleClass("open");
  });

});

