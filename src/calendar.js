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
    document.querySelector(`.view-${view}`).style.display = 'block';
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

function DayView() {
  return(
    `<div class="views view-day" id="view-day">
      <div class="day-grid">
        ${'<div class="hour"></div>'.repeat(24)}
      </div>
    </div>`
  );
}

function WeekView() {
  return(
    `<div class="views view-week" id="view-week">week</div>`
  );
}

function MonthView() {
  return(
    `<div class="views view-month" id="view-month">month</div>`
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
  table.innerHTML = '<caption>Month</caption>';
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