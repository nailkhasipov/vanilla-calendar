export default function MonthTable(timestamp) {
  const date = formatDate(timestamp);
  return `
    <form onsubmit="calendar.newEvent(); return false;" class="event-form">
      <h2 class="event-form__title">New Event</h2>
      <label class="event-form__label">Event name</label>
      <input id="event_name" class="event-form__name" type="text" placeholder="New event"/>

      <label class="event-form__label">Starts</label>
      <input id="event_start_date" class="event-form__date" type="date" value="${date}" />
      <input id="event_start_time" class="event-form__time" type="time" value="12:00" />

      <label class="event-form__label">Ends</label>
      <input id="event_end_date" class="event-form__date" type="date" value="${date}" />
      <input id="event_end_time" class="event-form__time" type="time" value="12:30" />

      <label class="event-form__label">Comment</label>
      <textarea id="event_comment" class="event-form__comment"></textarea>

      <input class="event-form__submit" type="submit" value="Create"/>
    </form>
  `;
}

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}