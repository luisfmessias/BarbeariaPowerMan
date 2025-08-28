//Data

flatpickr("#data", {
  dateFormat: "d/m/Y",
  minDate: "today"
});

//Hora
flatpickr("#horaAgendamento", {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  time_24hr: true,
  minuteIncrement: 30, //de meia em meia hora
  minTime: "09:00",
  maxTime: "18:00"
});
