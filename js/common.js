document.addEventListener("DOMContentLoaded", function () {
  $(".offcanvas-nav").on("click", function () {
    $("body").addClass("sidr-open");
  });
  $(".sidr-class-sidr-button-close").on("click", function (e) {
    $("body").removeClass("sidr-open");
    e.preventDefault();
  });
});
