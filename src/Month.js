import { getMonthArray } from './helpers';

export default function Month() {
  return(
    `<div class="views view-month" id="view-month">
      ${MonthTable()}
    </div>`
  );
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