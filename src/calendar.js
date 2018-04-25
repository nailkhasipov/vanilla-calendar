console.log('Live Long and Prosper 🖖');

class Calendar {
  constructor(root) {
    this.calendarComponent = this.getHTMLCalendarElement();

    this.dayView = this.calendarComponent.querySelector('#view-day');
    this.weekView = this.calendarComponent.querySelector('#view-week');
    this.monthView = this.calendarComponent.querySelector('#view-month');

    const changeViewDayButton = this.calendarComponent.querySelector('#change-view-day');
    changeViewDayButton.onclick = this.changeView.bind(this);

    const changeViewWeekButton = this.calendarComponent.querySelector('#change-view-week');
    changeViewWeekButton.onclick = this.changeView.bind(this);

    const changeViewMonthButton = this.calendarComponent.querySelector('#change-view-month');
    changeViewMonthButton.onclick = this.changeView.bind(this);

    const createEventButton = this.calendarComponent.querySelector('#create-event-button');
    createEventButton.onclick = this.createEvent;

    root.appendChild(this.calendarComponent);
  }

  getHTMLCalendarElement() {
    const calendarElement = document.createElement('DIV');
    calendarElement.className = 'calendar';
    calendarElement.innerHTML = `
      <div class="top">
      <div class="navigation">
        <button>TODAY</button>
        <button><</button>
        <button>></button>
      </div>
      <div class="view-change">
        <button id="change-view-day" view="day">DAY</button>
        <button id="change-view-week" view="week">WEEK</button>
        <button id="change-view-month" view="month">MONTH</button>
      </div>
      </div>
      <div class="main">
        <div class="sidebar">
          <button id="create-event-button">CREATE</button>
          <div class="sidebar-month" id="sidebar-month"></div>
        </div>
        <div class="view">
          <div class="views view-day" id="view-day"></div>
          <div class="views view-week" id="view-week">week</div>
          <div class="views view-month" id="view-month">month</div>
        </div>
      </div>`;

    //@TODO move to inline ${} script
    calendarElement.querySelector('#view-day').appendChild(this.getDayGrid());

    calendarElement.querySelector('#sidebar-month').appendChild(this.getMonthTable());

    return calendarElement;
  }

  //@TODO move to inline ${} script
  getDayGrid() {
    const day = document.createElement('div');
    day.className = 'day-grid';
    day.id = 'day-grid';

    for (let i = 0; i < 24; i++) {
      const hour = document.createElement('div');
      hour.className = 'hour';
      day.appendChild(hour);
    }

    return day;
  }

  getMonthTable() {
    const month = [[]];

    for (let i = 1; i <= 30; i++) {
      let currentWeek = month[month.length - 1];
      let day = String(i);
      if (currentWeek.length  == 7) {
        month.push([day]);
      } else {
        currentWeek.push(day);   
      }
    }

    const table = document.createElement('table');
    table.innerHTML = '<caption>Month</caption>';
    for (var w = 0; w < month.length; w++) {
      var row = table.insertRow(w);
      for (var d = 0; d < month[w].length; d++) {
        var cell = row.insertCell(-1);
        cell.innerHTML = month[w][d];
        cell.setAttribute('align', 'center');
      }
    }

    return table;
  }

  changeView(e) {
    const view = e.target.getAttribute('view');

    if ( view === 'day' ) {
      this.dayView.style.display = 'block';
      this.weekView.style.display = 'none';
      this.monthView.style.display = 'none';
    } else if ( view === 'week' ) {
      this.dayView.style.display = 'none';
      this.weekView.style.display = 'block';
      this.monthView.style.display = 'none';
    } else if ( view === 'month' ) {
      this.dayView.style.display = 'none';
      this.weekView.style.display = 'none';
      this.monthView.style.display = 'block';
    }
  }

  createEvent() {
    console.log('create event');
  }
}

new Calendar(document.querySelector('#calendar'));