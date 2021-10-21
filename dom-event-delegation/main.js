var $click = document.querySelector('.task-list');
function handleClick(event) {
  var $closest;
  console.log(event.target);
  console.log(event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    $closest = event.target.closest('.task-list-item');
    console.log($closest);
    $closest.remove();
  }
}

$click.addEventListener('click', handleClick);
