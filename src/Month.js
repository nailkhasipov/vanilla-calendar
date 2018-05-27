import { getMonthArray } from './helpers';

export default function Month(date) {
  return(
    `<div class="views view-month" id="view-month">
      ${MonthTable(date)}
    </div>`
  );
}

function MonthTable(date) {
  //@TODO think about it
  const month = getMonthArray(date);

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