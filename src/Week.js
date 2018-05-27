import { getMondayDate } from './helpers';
import HourLabels from './HourLabels';

export default function Week() {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const week = document.createElement('DIV');
  week.className = 'days';

  const mondayDate = getMondayDate(calendar.date);
  let weekDay = 0;

  for (let i = mondayDate; i < mondayDate + 7; i++) {
    const day = document.createElement('DIV');
    day.className = 'day-grid';
    day.innerHTML = `<h3 class="day-label">${daysOfWeek[weekDay]} ${i}</h3>${'<div class="hour"></div>'.repeat(24)}`;

    week.appendChild(day);

    weekDay++;
  }


  return(
    `<div class="views view-week" id="view-week">
      ${HourLabels()}
      ${week.outerHTML}
    </div>`
  );
}