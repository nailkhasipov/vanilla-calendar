const gridContainer = document.querySelector('#gridContainer');

export class Day {
  constructor() {
    this.mousePressed = false;

    gridContainer.onmousedown = function(e) {
      console.log(e);
      this.mousePressed = true;
    };

    gridContainer.onmousemove = function(e) {
      if (this.mousePressed)
        e.target.style.backgroundColor = 'deepskyblue';
    };
    
    gridContainer.onmouseup = function() {
      this.mousePressed = false;
    };
  }

  render() {
    const day = document.createElement('div');
    day.className = 'day-grid';

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
      const fifteen = document.createElement('div');
      fifteen.className = 'fifteen';
      // fifteen.addEventListener('dblclick', function() {
      //   fifteen.style.backgroundColor = 'deepskyblue';
      // });
      hour.appendChild(fifteen);
    }

    return hour;
  }
}