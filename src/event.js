export class Event {
  constructor(x) {
    this.x = x;
    this.node = undefined;
  }

  resize(e) {
    this.node.style.height = e.offsetY - parseInt(this.node.style.top) + 'px';
  }

  render() {
    if (!this.node) {
      let event = document.createElement('div');
      event.className = 'event';
      event.style.top = this.x + 'px';
      event.style.height = '1px';
      this.node = event;
    }

    return this.node;
  }
}