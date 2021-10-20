function handleFocus(event) {
  console.log('The focus event was fired.');
  console.log(event.target.name);
}
function handleBlur(event) {
  console.log('The blur event was fired.');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log('The input event was fired.');
  console.log(event.target.name);
  console.log(event.target.value);
}

var $name = document.forms[0].name;
var $email = document.forms[0].email;
var $message = document.forms[0].message;

$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
