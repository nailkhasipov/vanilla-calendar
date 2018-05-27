export default function HourLabels() {
  let labelsList = document.createElement('UL');
  labelsList.className = 'labels';

  for (let i = 0; i < 24; i++) {
    let label = document.createElement('LI');
    label.innerText = `${String(i).padStart(2, '0')}:00`;
    labelsList.appendChild(label);
  }

  return labelsList.outerHTML;
}