import { htmlToElement, getDateTitle }from './helpers';

import MonthTable from './MonthTable';
import EventForm from './EventForm';
import Day from './Day';

const TWENTYFOURHOURS = 86400000;

class Calendar {
  constructor(element) {
    this.element = element;
    this.state = {
      date: new Date().getTime(),
      view: 'day',
      events: JSON.parse(localStorage.getItem('events')) || []
    };

    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handlePrev.bind(this);
    this.handleNewEvent = this.handleNewEvent.bind(this);

    this.render();
  }

  setState(props) {
    for (var key in props) {
      if (props.hasOwnProperty(key)) {
        this.state[key] = props[key];
      }
    }

    this.render();
  }

  handlePrev() {
    const date = this.state.date - TWENTYFOURHOURS;
    this.setState({
      date: date
    });
  }

  handleNext() {
    const date = this.state.date + TWENTYFOURHOURS;
    this.setState({
      date: date
    });
  }

  handleNewEvent(event) {
    const events = this.state.events;
    events.push(event);
    localStorage.setItem('events', JSON.stringify(events));

    this.setState({
      events: events
    });
  }

  render() {
    const calendar = htmlToElement(this.template());

    calendar.querySelector('PrevButton').replaceWith(PrevButton(this.handlePrev));
    calendar.querySelector('NextButton').replaceWith(NextButton(this.handleNext));
    calendar.querySelector('MonthTable').replaceWith(MonthTable(this.state.date));
    calendar.querySelector('EventForm').replaceWith(EventForm(this.state.date, this.handleNewEvent));
    calendar.querySelector('View').replaceWith(Day(this.state.date, this.state.events));

    this.element.innerHTML = '';
    this.element.appendChild(calendar);
  }

  template() {
    return `
      <div class="calendar">
        <div class="top">
        <div class="navigation">
          <button>TODAY</button>
          <PrevButton></PrevButton>
          <NextButton></NextButton>
        </div>
        <h2 class="date-info">${getDateTitle(this.state.date)}</h2>
        <div class="view-change">
          <button onclick="calendar.changeView('day')">DAY</button>
          <button onclick="calendar.changeView('week')">WEEK</button>
          <button onclick="calendar.changeView('month')">MONTH</button>
        </div>
        </div>
        <div class="main">
          <div class="sidebar">
            <div class="sidebar-month" id="sidebar-month">
              <MonthTable></MonthTable>
            </div>
            <EventForm></EventForm>
          </div>
          <div class="view">
            <View></View>
          </div>
        </div>
      </div>
    `;
  }
}

function PrevButton(onClick) {
  const prevButton = document.createElement('BUTTON');
  prevButton.innerText = '<';
  prevButton.onclick = () => onClick();

  return prevButton;
}

function NextButton(onClick) {
  const nextButton = document.createElement('BUTTON');
  nextButton.innerText = '>';
  nextButton.onclick = () => onClick();

  return nextButton;
}

export default Calendar;