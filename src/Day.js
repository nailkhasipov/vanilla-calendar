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
      let thirteen = new Thirteen();
      hour.appendChild(thirteen.render());
    }

    return hour;
  }
}

class Thirteen {
  render() {
    const thirteen = document.createElement('div');
    thirteen.className = 'thirteen';
    return thirteen;
  }
}