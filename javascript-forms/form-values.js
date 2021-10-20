var $form = document.forms[0];

function handleSubmit(event) {
  event.preventDefault();
  var $formObj = {};
  $formObj[$form.elements.name.name] = $form.elements.name.value;
  $formObj[$form.elements.email.name] = $form.elements.email.value;
  $formObj[$form.elements.message.name] = $form.elements.message.value;

  console.log($formObj);

}
$form.addEventListener('submit', handleSubmit);

$form.reset();
