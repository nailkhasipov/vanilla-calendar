import { Calendar } from './calendar.js';
import { Day } from './Day.js';

const calendar = new Calendar;
const day = new Day;

const sidebar = document.querySelector('#sidebar');
const gridContainer = document.querySelector('#gridContainer');

//@TODO REFACTOR!
sidebar.appendChild(calendar.drawMonth(calendar.months[0], calendar.getMonth(calendar.dayInMonth[0], 7)));

gridContainer.appendChild(day.render());
