document.addEventListener("DOMContentLoaded", function () {
  $(".offcanvas-nav").on("click", function () {
    $("body").addClass("sidr-open");
  });
  $(".sidr-class-sidr-button-close").on("click", function (e) {
    $("body").removeClass("sidr-open");
    e.preventDefault();
  });

  const dateMask = document.getElementById('birth_day');
  if (dateMask) {
    IMask(
      dateMask,
      {
        mask: Date,
        min: new Date(1950, 0, 1),
        max: new Date(2020, 0, 1),
        lazy: false
      });  
  }
  const phoneMask = document.getElementById('phone');
  if (phoneMask) {
    IMask(
      phoneMask, {
        mask: '+{7} (000)-000-00-00'
      });
  }
  

  $('.theme-select').select2({
    placeholder: "Select a state",
  });

});
