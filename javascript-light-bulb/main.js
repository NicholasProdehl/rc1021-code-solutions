var $background = document.querySelector('.background-dark');
var $circle = document.querySelector('.circle-dark');
function handleClick(event) {
  if ($background.className === 'background-bright') {
    $background.className = 'background-dark';
    $circle.className = 'circle-dark';
  } else if ($background.className === 'background-dark') {
    $background.className = 'background-bright';
    $circle.className = 'circle-bright';
  }
}
$circle.addEventListener('click', handleClick);
