var $container = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

$container.addEventListener('click', function (e) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabs.length; i++) {
      if (event.target === $tabs[i]) {
        $tabs[i].className = 'tab active';
      } else {
        $tabs[i].className = 'tab';
      }
    }
    var $dataView = event.target.getAttribute('data-view');
    for (var b = 0; b < $views.length; b++) {
      if ($dataView !== $views[b].getAttribute('data-view')) {
        $views[b].className = 'view hidden';
      } else {
        $views[b].className = 'view';
      }
    }
  }
});
