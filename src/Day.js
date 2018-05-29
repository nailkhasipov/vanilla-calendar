import HourLabels from './HourLabels';

export default function Day(timestamp, events) {
  const date = new Date(timestamp);
  const startOfTheDay = date.setHours(0,0,0,0);
  const endOfTheDay = date.setHours(23,59,59,999);

  const dayEvents = events.filter(event => event.start > startOfTheDay && event.start < endOfTheDay);

  return(
    `<div class="views view-day" id="view-day">
      ${HourLabels()}
      <div class="day-grid">
        ${'<div class="hour"></div>'.repeat(24)}
        <div class="day-events">
          ${dayEvents.map(event => Event(event))}
        </div>
      </div>
    </div>`
  );
}

function Event(props) {
  const eventElement = document.createElement('DIV');
  eventElement.className = 'event';
  eventElement.innerText = props.name;

  const start = new Date(props.start);
  const end = new Date(props.end);

  const topPosition = (start.getHours() * 60 + start.getMinutes()) * 0.6;
  const height = (end.getHours() * 60 + end.getMinutes()) * 0.6 - topPosition;

  eventElement.style.top = `${topPosition}px`;
  eventElement.style.height = `${height}px`;

  return eventElement.outerHTML;
}