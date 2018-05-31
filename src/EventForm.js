export default function EventForm(timestamp, onSubmit) {
  const date = formatDate(timestamp);
  const form = document.createElement('FORM');
  form.className = 'event-form';
  form.innerHTML = `
    <h2 class="event-form__title">New Event</h2>
    <label class="event-form__label">Event name</label>
    <input id="event_name" class="event-form__name" type="text" name="name" placeholder="New event"/>

    <label class="event-form__label">Starts</label>
    <input id="event_start_date" class="event-form__date" type="date" name="startDate" value="${date}" />
    <input id="event_start_time" class="event-form__time" type="time" name="startTime" value="12:00" />

    <label class="event-form__label">Ends</label>
    <input id="event_end_date" class="event-form__date" type="date" name="endDate" value="${date}" />
    <input id="event_end_time" class="event-form__time" type="time" name="endTime" value="12:30" />

    <label class="event-form__label">Comment</label>
    <textarea id="event_comment" class="event-form__comment"></textarea>

    <input class="event-form__submit" type="submit" value="Create"/>
  `;

  form.onsubmit = function(e) {
    e.preventDefault();

    const startDate = e.target.startDate.value;
    const startTime = e.target.startTime.value;
    const start = toDate(startDate, startTime);

    const endDate = e.target.endDate.value;
    const endTime = e.target.endTime.value;
    const end = toDate(endDate, endTime);

    const event = {
      name: e.target.name.value,
      start: start,
      end: end
    };

    onSubmit(event);
  };

  return form;
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

function toDate(dateStr, timeStr) {
  const [year, month, day] = dateStr.split('-');
  const [hour, minute] = timeStr.split(':');
  return new Date(year, month - 1, day, hour, minute).getTime();
}