document.addEventListener("DOMContentLoaded", function () {
  $(".offcanvas-nav").on("click", function () {
    $("body").addClass("sidr-open");
  });
  $(".sidr-class-sidr-button-close").on("click", function (e) {
    $("body").removeClass("sidr-open");
    e.preventDefault();
  });

  $( ".datepicker" ).datepicker();
  $.datepicker.regional['ru'] = {clearText: 'Закрыть', clearStatus: '',
    closeText: 'Fermer', closeStatus: 'Fermer sans modifier',
    prevText: 'Пред', prevStatus: 'Voir le mois précédent',
    nextText: 'След;', nextStatus: 'Voir le mois suivant',
    currentText: 'Текущий', currentStatus: 'Voir le mois courant',
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
    'Июль','Август','Сентрябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Инь',
    'Июь','Авг','Сен','Окт','Ноя','Дек'],
    monthStatus: 'Voir un autre mois', yearStatus: 'Voir un autre année',
    weekHeader: 'Sm', weekStatus: '',
    dayNames: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
    dayNamesShort: ['Воскр','Пн','Вт','Ср','Чет','Пят','Суб'],
    dayNamesMin: ['Вк','Пн','Вт','Ср','Чт','Пт','Сб'],
    dayStatus: 'Utiliser DD comme premier jour de la semaine', dateStatus: 'Choisir le DD, MM d',
    dateFormat: 'dd.mm.yy', firstDay: 1, 
    initStatus: 'Choisir la date', isRTL: false};
 $.datepicker.setDefaults($.datepicker.regional['ru']);

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
