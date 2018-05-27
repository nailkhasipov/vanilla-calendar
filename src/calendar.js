import MonthTable from './MonthTable';
import Day from './Day';
import Week from './Week';
import Month from './Month';

class Calendar {
  constructor(root) {
    this.root = root;
    this.view = 'day';
    this.date = '27 May 2018';

    root.innerHTML = this.render();
  }

  changeView(view) {
    this.view = view;
    this.root.innerHTML = this.render();
  }

  createEvent() {
    console.log('create event');
  }

  render() {
    let view;

    switch (this.view) {
    case 'day':
      view = Day();
      break;
    case 'week':
      view = Week();
      break;
    case 'month':
      view = Month();
      break;
    }

    return (
      `<div class="calendar">
        <div class="top">
        <div class="navigation">
          <button>TODAY</button>
          <button><</button>
          <button>></button>
        </div>
        <h2 class="date-info">${this.date}</h2>
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
              ${MonthTable()}
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