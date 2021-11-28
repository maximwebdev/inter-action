document.addEventListener("DOMContentLoaded", function () {
  $(".offcanvas-nav").on("click", function () {
    $("body").addClass("sidr-open");
  });
  $(".sidr-class-sidr-button-close").on("click", function (e) {
    $("body").removeClass("sidr-open");
    e.preventDefault();
  });

  var dateMask = IMask(
    document.getElementById('birth_day'),
    {
      mask: Date,
      min: new Date(1950, 0, 1),
      max: new Date(2020, 0, 1),
      lazy: false
    });

  var phoneMask = IMask(
    document.getElementById('phone'), {
      mask: '+{7} (000)-000-00-00'
    });

    $('.theme-select').select2();

});
