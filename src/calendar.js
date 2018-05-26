console.log('Live Long and Prosper 🖖');

class Calendar {
  constructor(root) {
    root.innerHTML = this.render();
  }

  changeView(view) {
    const views = document.getElementsByClassName('views');
    Array.prototype.forEach.call(views, function(view) {
      view.style.display = 'none';
    });
    document.querySelector(`.view-${view}`).style.display = 'flex';
  }

  createEvent() {
    console.log('create event');
  }

  render() {
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
              ${getHTMLMonthTable()}
            </div>
          </div>
          <div class="view">
            ${DayView()}
            ${WeekView()}
            ${MonthView()}
          </div>
        </div>
      </div>`
    );
  }
}

function Labels() {
  const labels = new Array(24);
  let labelsList = document.createElement('UL');
  labelsList.className = 'labels';

  for (let i = 0; i < labels.length; i++) {
    let label = document.createElement('LI');
    label.innerText = `${String(i).padStart(2, '0')}:00`;
    labelsList.appendChild(label);
  }

  return labelsList.outerHTML;
}

function DayView() {
  return(
    `<div class="views view-day" id="view-day">
      ${Labels()}
      <div class="day-grid">
        ${'<div class="hour"></div>'.repeat(24)}
      </div>
    </div>`
  );
}

function WeekView() {
  return(
    `<div class="views view-week" id="view-week">
      ${Labels()}
      <div class="days">
        ${`<div class="day-grid">${'<div class="hour"></div>'.repeat(24)}</div>`.repeat(7)}
      </div>
    </div>`
  );
}

function MonthView() {
  return(
    `<div class="views view-month" id="view-month">
      ${getHTMLMonthTable()}
    </div>`
  );
}

const calendar = new Calendar(document.querySelector('#calendar'));

function getHTMLMonthTable() {
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