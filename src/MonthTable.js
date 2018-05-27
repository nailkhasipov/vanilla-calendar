import { getMonthArray } from './helpers';

export default function MonthTable(timestamp) {
  const today = String(new Date().getDate());
  const month = getMonthArray(timestamp);

  const table = document.createElement('table');
  for (var w = 0; w < month.length; w++) {
    var row = table.insertRow(w);
    for (var d = 0; d < month[w].length; d++) {
      var cell = row.insertCell(-1);
      cell.innerHTML = month[w][d];
      cell.setAttribute('align', 'center');

      if (month[w][d] === today)
        cell.className = 'today';
    }
  }

  return table.outerHTML;
}