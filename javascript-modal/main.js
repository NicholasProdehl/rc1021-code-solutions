var $openModal = document.querySelector('.open-modal');
var $no = document.querySelector('.no');
var $survey = document.querySelector('.survey-page-whole-none');

function $handleModal(event) {
  $survey.className = 'survey-page-whole';
}

function $handleNo(event) {
  $survey.className = 'survey-page-whole-none';
}

$openModal.addEventListener('click', $handleModal);
$no.addEventListener('click', $handleNo);
