var $letters = document.querySelectorAll('span');
var i = 0;
function handleKeyPress(event) {
  if (event.key === $letters[i].textContent) {
    $letters[i].className = 'green';
    $letters[i + 1].className = 'underlined';
    i++;
  } else {
    $letters[i].className = 'red underlined';
  }
}

document.addEventListener('keypress', handleKeyPress);
