import { getDateTitle }from './helpers';

import MonthTable from './MonthTable';
import Day from './Day';
import Week from './Week';
import Month from './Month';

class Calendar {
  constructor(root) {
    this.root = root;
    this.view = 'day';
    this.date = Date.now();

    root.innerHTML = this.render();
  }

  changeView(view) {
    this.view = view;
    this.root.innerHTML = this.render();
  }

  createEvent() {
    console.log('create event');
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
      view = Day(this.date);
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
            <button onclick="calendar.createEvent()">CREATE</button>
            <div class="sidebar-month" id="sidebar-month">
              ${MonthTable(this.date)}
            </div>
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