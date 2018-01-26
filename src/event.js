export class Event {
  constructor(e) {
    this.y = getY(e);
    this.name = undefined;
    this.node = undefined;
    this.isDragged = false;
  }

  resize(e) {
    this.node.style.height = getY(e) - parseInt(this.node.style.top) + 'px';
  }

  move(y) {
    this.node.style.top = Math.floor(y/20) * 20 + 'px';
  }

  displayName() {
    let span = document.createElement('SPAN');
    span.innerText = this.name;
    this.node.appendChild(span);
  }

  render() {
    if (!this.node) {
      let event = document.createElement('div');
      event.className = 'event';
      event.style.top = this.y + 'px';
      event.style.height = '1px';
      this.node = event;
    }

    this.node.onmousedown = e => {
      e.preventDefault();
      this.isDragged = true;
    };

    return this.node;
  }
}

function getY(e) {
  return Math.floor(e.offsetY/20) * 20;
}
