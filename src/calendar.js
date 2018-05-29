import { getDateTitle }from './helpers';

import MonthTable from './MonthTable';
import EventForm from './EventForm';
import Day from './Day';
import Week from './Week';
import Month from './Month';

class Calendar {
  constructor(root) {
    this.root = root;
    this.view = 'day';
    this.date = Date.now();
    this.events = JSON.parse(localStorage.getItem('events')) || [];

    root.innerHTML = this.render();
  }

  changeView(view) {
    this.view = view;
    this.root.innerHTML = this.render();
  }

  newEvent() {
    const name = document.querySelector('#event_name').value;

    const startDate = document.querySelector('#event_start_date').value;
    const startTime = document.querySelector('#event_start_time').value;
    const start = toDate(startDate, startTime);

    const endDate = document.querySelector('#event_end_date').value;
    const endTime = document.querySelector('#event_end_time').value;
    const end = toDate(endDate, endTime);

    const event = {
      name: name,
      start: start,
      end: end
    };

    this.events.push(event);

    localStorage.setItem('events', JSON.stringify(this.events));
  }

  prev() {
    this.date -= 86400000;
    this.root.innerHTML = this.render();
  }

  next() {
    this.date += 86400000;
    this.root.innerHTML = this.render();
  }

  render() {
    let view;

    switch (this.view) {
    case 'day':
      view = Day(this.date, this.events);
      break;
    case 'week':
      view = Week(this.date);
      break;
    case 'month':
      view = Month(this.date);
      break;
    }

    return (
      `<div class="calendar">
        <div class="top">
        <div class="navigation">
          <button>TODAY</button>
          <button onclick="calendar.prev()"><</button>
          <button onclick="calendar.next()">></button>
        </div>
        <h2 class="date-info">${getDateTitle(this.date)}</h2>
        <div class="view-change">
          <button onclick="calendar.changeView('day')">DAY</button>
          <button onclick="calendar.changeView('week')">WEEK</button>
          <button onclick="calendar.changeView('month')">MONTH</button>
        </div>
        </div>
        <div class="main">
          <div class="sidebar">
            <div class="sidebar-month" id="sidebar-month">
              ${MonthTable(this.date)}
            </div>
            ${EventForm(this.date)}
          </div>
          <div class="view">
            ${view}
          </div>
        </div>
      </div>`
    );
  }
}

export default Calendar;

function toDate(dateStr, timeStr) {
  const [year, month, day] = dateStr.split('-');
  const [hour, minute] = timeStr.split(':');
  return new Date(year, month - 1, day, hour, minute).getTime();
}