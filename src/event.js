export class Event {
  constructor(x) {
    this.x = x;
  }

  render() {
    let event = document.createElement('div');
    event.className = 'event';
    event.style.top = this.x + 'px';

    return event;
  }
}