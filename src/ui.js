function UI() {}

UI.prototype.tabs = function() {
  const tabs = document.getElementsByClassName('nav-link');
  const panes = document.getElementsByClassName('view-pane');
  
  Array.prototype.forEach.call(tabs, function(tab) {
    const name = tab.getAttribute('href');
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      selectTab(name);
    });
  });
  
  function selectTab(name) {
    Array.prototype.forEach.call(panes, function(pane) {
      pane.style.display = 'none';
    });
  
    document.querySelector(name).style.display = 'block';
  }

  selectTab('#year');
};

export { UI };