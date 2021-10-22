var $letters = document.querySelectorAll('span');

function handleKeyPress(event) {
  for (var i = 0; i < $letters.length; i++) {
    if (event.key === $letters[i]) {
      $letters[i].className = 'green';
      $letters[i].className = 'underlined';
    }
  }
}

$letters.addEventListener('keydown', handleKeyPress);
