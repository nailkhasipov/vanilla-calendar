console.log('Live Long and Prosper 🖖');

const calendar = document.createElement('DIV');
calendar.className = 'calendar';
calendar.innerHTML = `
<div class="top">
<div class="navigation">
  <button>TODAY</button>
  <button><</button>
  <button>></button>
</div>
<div class="view-change">
  <button class="change-view">DAY</button>
  <button class="change-view">WEEK</button>
  <button class="change-view">MONTH</button>
</div>
</div>
<div class="main">
  <div class="sidebar">
    <button>CREATE</button>
    <div class="sidebar-month" id="sidebar-month"></div>
  </div>
  <div class="view">
    <div class="view-day" id="view-day"></div>
    <div class="view-week" id="view-week"></div>
    <div class="view-month" id="view-month"></div>
  </div>
</div>
`;

const tabs = calendar.getElementsByClassName('change-view');
for (var i = 0; i < tabs.length; i++) {
  tabs[i].onclick = function() {
    console.log('binded!');
  };
}

const day = document.createElement('div');
day.className = 'day-grid';
day.id = 'day-grid';

for (let i = 0; i < 24; i++) {
  const hour = document.createElement('div');
  hour.className = 'hour';
  day.appendChild(hour);
}

calendar.querySelector('#view-day').appendChild(day);

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

calendar.querySelector('#sidebar-month').appendChild(table);

document.querySelector('#calendar').appendChild(calendar);