import { Calendar } from './calendar.js';

const calendar = new Calendar;

const sidebar = document.querySelector('#sidebar');
const gridContainer = document.querySelector('#gridContainer');

document.body.onmousedown = function() {};

sidebar.appendChild(calendar.drawMonth(calendar.months[0], calendar.getMonth(calendar.dayInMonth[0], 7)));

gridContainer.appendChild(drawHourLabels());
gridContainer.appendChild(drawDay());

function drawHourLabels() {
  const labels = document.createElement('div');
  labels.className = 'labels';

  for (let i = 0; i < 24; i++) {
    const label = document.createElement('span');
    label.innerText = i;
    labels.appendChild(label);
  }

  return labels;
}

function drawDay() {
  const day = document.createElement('div');
  day.className = 'day-grid';

  for (let i = 0; i < 24; i++) {
    const hour = document.createElement('div');
    hour.className = 'hour';
    for (let i = 0; i < 4; i++) {
      const fifteenMinutes = document.createElement('div');
      fifteenMinutes.className = 'fifteen-minutes';
      fifteenMinutes.addEventListener('dblclick', function() {
        fifteenMinutes.style.backgroundColor = 'deepskyblue';
      });
      hour.appendChild(fifteenMinutes);
    }
    day.appendChild(hour);
  }

  return day;
}