function Calendar() {
  this.months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
                 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  this.dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}

Calendar.prototype.draw = function() {
  for (var i = 0; i < this.months.length; i++) {
    var start = new Date('2017-' + (i+1) + '-01').getDay();
    start = (start===0) ? 7 : start;
    //@TODO refactor
    var month = this.drawMonth(this.months[i], this.getMonth(this.dayInMonth[i], start));
    document.getElementById('calendar-year').appendChild(month);
  }
};

Calendar.prototype.getMonth = function(days, start) {
  var month = [[]];
  if (start) {
    for (var i = 1; i < start; i++) {
      month[0].push('');
    }
  }
  for (var i = 1; i <= days; i++) {
    var currentWeek = month[month.length - 1];
    var day = String(i);
    if (currentWeek.length  == 7) {
      month.push([day]);
    } else {
      currentWeek.push(day);   
    }
  }
  return month;
};

Calendar.prototype.drawMonth = function(name, month) {
  var wrapper = document.createElement('div');
  wrapper.className = 'month-wrapper';

  var table = document.createElement('table');
  table.innerHTML = '<caption>' + name + '</caption>';
  for (var w = 0; w < month.length; w++) {
    var row = table.insertRow(w);
    for (var d = 0; d < month[w].length; d++) {
      var cell = row.insertCell(-1);
      cell.innerHTML = month[w][d];
      cell.setAttribute('align', 'center');
    }
  }

  wrapper.appendChild(table);
  
  return wrapper;
};

export { Calendar };