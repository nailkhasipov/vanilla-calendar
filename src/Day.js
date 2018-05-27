import { HourLabels } from './helpers';

export default function Day() {
  return(
    `<div class="views view-day" id="view-day">
      ${HourLabels()}
      <div class="day-grid">
        ${'<div class="hour"></div>'.repeat(24)}
      </div>
    </div>`
  );
}