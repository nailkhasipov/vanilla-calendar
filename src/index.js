console.log('Live Long and Prosper 🖖');

const month = [[]];

for (var i = 1; i <= 30; i++) {
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

document.querySelector('#sidebar-month').appendChild(table);

const day = document.createElement('div');
day.className = 'day-grid';
day.id = 'day-grid';

const labels = document.createElement('div');
labels.className = 'labels';

for (let i = 0; i < 24; i++) {

  const label = document.createElement('span');
  label.innerText = i;
  labels.appendChild(label);

  const hour = document.createElement('div');
  hour.className = 'hour';

  for (let i = 0; i < 4; i++) {
    const thirty = document.createElement('div');
    thirty.className = 'thirty';
    hour.appendChild(thirty);
  }
  day.appendChild(hour);
}

document.querySelector('#view-day').appendChild(day);