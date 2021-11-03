var counter = 4;

function handleLoad() {
  var $text = document.querySelector('h1');
  if ($text.textContent !== '1') {
    $text.textContent = counter - 1;
    counter--;
  } else {
    $text.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalReturn);
  }
}

var intervalReturn = setInterval(handleLoad, 1000);
