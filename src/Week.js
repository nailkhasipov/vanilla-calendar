import { HourLabels } from './helpers';

export default function Week() {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const week = document.createElement('DIV');
  week.className = 'days';

  for (let i = 0; i < daysOfWeek.length; i++) {
    const day = document.createElement('DIV');
    day.className = 'day-grid';
    day.innerHTML = `<h3 class="day-label">${daysOfWeek[i]}</h3>${'<div class="hour"></div>'.repeat(24)}`;

    week.appendChild(day);
  }


  return(
    `<div class="views view-week" id="view-week">
      ${HourLabels()}
      ${week.outerHTML}
    </div>`
  );
}