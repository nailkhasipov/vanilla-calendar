import { UI } from './ui.js';
import { Calendar } from './calendar.js';

const ui = new UI();
const calendar = new Calendar();

ui.tabs();
calendar.draw();

pageMonth();

function pageMonth() {
  const div = document.querySelector('#month');
  div.appendChild(calendar.drawMonth(calendar.months[0], calendar.getMonth(calendar.dayInMonth[0], 7)));
}