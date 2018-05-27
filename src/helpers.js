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

export { getMonthArray, HourLabels };