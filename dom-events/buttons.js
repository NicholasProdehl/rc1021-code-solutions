function handleClick(event) {
  console.log('Button Clicked!');
  console.log(event);
  console.log(event.target);
}

var $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('Button Hovered!');
  console.log(event);
  console.log(event.target);
}

var $mouseOver = document.querySelector('.hover-button');
$mouseOver.addEventListener('mouseover', handleMouseover, false);

function handleDoubleClick(event) {
  console.log('Button double clicked!');
  console.log(event);
  console.log(event.target);
}

var $dblClick = document.querySelector('.double-click-button');
$dblClick.addEventListener('dblclick', handleDoubleClick, false);
