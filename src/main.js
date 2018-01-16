import { Calendar } from './calendar.js';
import { Day } from './day.js';
import { Event } from './event.js';

const calendar = new Calendar;
const day = new Day;
let events = [];

const sidebar = document.querySelector('#sidebar');
const gridContainer = document.querySelector('#gridContainer');

//@TODO REFACTOR!
sidebar.appendChild(calendar.drawMonth(calendar.months[0], calendar.getMonth(calendar.dayInMonth[0], 7)));

gridContainer.appendChild(day.render());

const blank = document.createElement('DIV');
blank.className = 'blank';

const dayGrid = document.querySelector('#day-grid');

dayGrid.appendChild(blank);

dayGrid.onmousedown = function(e) {
  console.log(e);
  let event = new Event(e.offsetY);
  blank.appendChild(event.render());
};

// gridContainer.onmousemove = function() {
//   if (this.mousePressed) {
//     this.event.height += 20;
//     this.event.render();
//   }
// };

// gridContainer.onmouseup = function() {
//   this.mousePressed = false;
// };
