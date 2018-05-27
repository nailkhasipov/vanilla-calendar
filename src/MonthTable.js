import { getMonthArray } from './helpers';

export default function MonthTable() {
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