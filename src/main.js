import { Calendar } from './calendar.js';
import { Day } from './day.js';
import { Event } from './event.js';

const calendar = new Calendar;
const day = new Day;
let events = [];
let currentEvent = undefined;
let mousePressed = false;

const sidebar = document.querySelector('#sidebar');
const gridContainer = document.querySelector('#gridContainer');

//@TODO REFACTOR!
sidebar.appendChild(calendar.drawMonth(calendar.months[0], calendar.getMonth(calendar.dayInMonth[0], 7)));

gridContainer.appendChild(day.render());

const blank = document.createElement('DIV');
blank.className = 'blank';

const dayGrid = document.querySelector('#day-grid');

dayGrid.appendChild(blank);

dayGrid.onmousedown = e => {
  if (e.target.className != 'event') {
    mousePressed = true;
    addEvent(e);
  }
};

dayGrid.onmousemove = e => {
  if (currentEvent && mousePressed)
    currentEvent.resize(e);

  events.forEach(function(event) {
    if (event.isDragged) {
      event.move(getOffset(e));
    }
  }); 
};

window.onmouseup = () => {
  mousePressed = false;
  if (currentEvent) {
    let eventName = prompt('Event name');
    currentEvent.name = eventName;
    currentEvent.displayName();

    currentEvent = undefined;
  }

  events.forEach(function(event) {
    if (event.isDragged) {
      event.isDragged = false;
    }
  }); 
};

function addEvent(e) {
  let event = new Event(e);
  currentEvent = event;
  events.push(event);
  blank.appendChild(event.render());
}

function getOffset(e) {
  return parseInt(e.clientY) - parseInt(e.target.parentNode.getBoundingClientRect().top);
}
