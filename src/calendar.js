console.log('Live Long and Prosper 🖖');

class Calendar {
  constructor(root) {
    this.root = root;
    this.view = 'day';

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
              ${MiniMonthTable()}
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

function Day() {
  return(
    `<div class="views view-day" id="view-day">
      ${HourLabels()}
      <div class="day-grid">
        ${'<div class="hour"></div>'.repeat(24)}
      </div>
    </div>`
  );
}

function Week() {
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

function Month() {
  return(
    `<div class="views view-month" id="view-month">
      ${MonthTable()}
    </div>`
  );
}

function HourLabels() {
  let labelsList = document.createElement('UL');
  labelsList.className = 'labels';

  for (let i = 0; i < 24; i++) {
    let label = document.createElement('LI');
    label.innerText = `${String(i).padStart(2, '0')}:00`;
    labelsList.appendChild(label);
  }

  return labelsList.outerHTML;
}

function MiniMonthTable() {
  const month = getMonthArray();

  const table = document.createElement('table');
  for (var w = 0; w < month.length; w++) {
    var row = table.insertRow(w);
    for (var d = 0; d < month[w].length; d++) {
      var cell = row.insertCell(-1);
      cell.innerHTML = month[w][d];
      cell.setAttribute('align', 'center');
    }
  }

  return table.outerHTML;
}

function MonthTable() {
  const month = getMonthArray();

  const table = document.createElement('table');
  table.className = 'month-table';
  for (var w = 0; w < month.length; w++) {
    var row = table.insertRow(w);
    for (var d = 0; d < month[w].length; d++) {
      const cell = row.insertCell(-1);
      const label = document.createElement('P');
      label.innerText = month[w][d];
      cell.appendChild(label);
    }
  }

  return table.outerHTML;
}

function getMonthArray() {
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

  return month;
}