
$(document).ready(function () {
  
  $("#menu").click(function () {
    $(this).toggleClass("active");
    $("#nav-menu").toggleClass("open");
    $("#mobile-nav").toggleClass("open");
  });

});

