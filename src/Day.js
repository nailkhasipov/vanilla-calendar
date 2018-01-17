const gridContainer = document.querySelector('#gridContainer');

export class Day {
  constructor() {
  }

  render() {
    const day = document.createElement('div');
    day.className = 'day-grid';
    day.id = 'day-grid';

    const labels = document.createElement('div');
    labels.className = 'labels';

    for (let i = 0; i < 24; i++) {

      const label = document.createElement('span');
      label.innerText = i;
      labels.appendChild(label);

      let hour = new Hour();
      day.appendChild(hour.render());
    }

    gridContainer.appendChild(labels);
    return day;
  }
}

class Hour {
  render() {
    const hour = document.createElement('div');
    hour.className = 'hour';

    for (let i = 0; i < 4; i++) {
      let thirty = new Thirty();
      hour.appendChild(thirty.render());
    }

    return hour;
  }
}

class Thirty {
  render() {
    const thirty = document.createElement('div');
    thirty.className = 'thirty';
    return thirty;
  }
}