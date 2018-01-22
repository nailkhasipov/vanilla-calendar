export class Event {
  constructor(e) {
    this.y = getY(e);
    this.name = undefined;
    this.node = undefined;
  }

  resize(e) {
    this.node.style.height = getY(e) - parseInt(this.node.style.top) + 'px';
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

    return this.node;
  }
}

function getY(e) {
  return Math.floor(e.offsetY/20) * 20;
}