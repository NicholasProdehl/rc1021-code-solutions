var $right = document.querySelector('.fa-chevron-right');
var $left = document.querySelector('.fa-chevron-left');
var $image = document.querySelector('img');
var $circles = document.querySelectorAll('.fa-circle');

var counter = 0;

setInterval(handleRight, 3000);
let i = 1;
function handleRight() {
  clearInterval(1);
  clearInterval(i);
  clearInterval(b);
  if (counter === 0) {
    $image.setAttribute('src', 'images/004.png');
    $circles[0].setAttribute('class', 'far fa-circle one');
    $circles[1].setAttribute('class', 'fas fa-circle two');
    counter++;
  } else if (counter === 1) {
    $image.setAttribute('src', 'images/007.png');
    $circles[1].setAttribute('class', 'far fa-circle two');
    $circles[2].setAttribute('class', 'fas fa-circle three');
    counter++;
  } else if (counter === 2) {
    $image.setAttribute('src', 'images/025.png');
    $circles[2].setAttribute('class', 'far fa-circle three');
    $circles[3].setAttribute('class', 'fas fa-circle four');
    counter++;
  } else if (counter === 3) {
    $image.setAttribute('src', 'images/039.png');
    $circles[3].setAttribute('class', 'far fa-circle four');
    $circles[4].setAttribute('class', 'fas fa-circle five');
    counter++;
  } else if (counter === 4) {
    $image.setAttribute('src', 'images/001.png');
    $circles[4].setAttribute('class', 'far fa-circle five');
    $circles[0].setAttribute('class', 'fas fa-circle one');
    counter = 0;
  }
  // console.log('handleRight counter: ', counter);
  // console.log('handleRight Selected: ', document.getElementsByClassName('fas fa-circle'));
  setInterval(handleRight, 3000);
  i++;
}

let b = 1;
function handleLeft() {
  clearInterval(1);
  clearInterval(b);
  clearInterval(i);
  if (counter === 0) {
    $image.setAttribute('src', 'images/039.png');
    $circles[2].setAttribute('class', 'far fa-circle three');
    $circles[3].setAttribute('class', 'fas fa-circle four');
    counter = 3;
  } else if (counter === 1) {
    $image.setAttribute('src', 'images/001.png');
    $circles[3].setAttribute('class', 'far fa-circle four');
    $circles[4].setAttribute('class', 'fas fa-circle five');
    counter = 4;
  } else if (counter === 2) {
    $image.setAttribute('src', 'images/004.png');
    $circles[4].setAttribute('class', 'far fa-circle five');
    $circles[0].setAttribute('class', 'fas fa-circle one');
    counter = counter - 2;
  } else if (counter === 3) {
    $image.setAttribute('src', 'images/007.png');
    $circles[0].setAttribute('class', 'far fa-circle one');
    $circles[1].setAttribute('class', 'fas fa-circle two');
    counter = counter - 2;
  } else if (counter === 4) {
    $image.setAttribute('src', 'images/025.png');
    $circles[1].setAttribute('class', 'far fa-circle two');
    $circles[2].setAttribute('class', 'fas fa-circle three');
    counter = counter - 2;
  }
  // console.log('handleLeft Counter:', counter);
  // console.log('handleLeft Selected: ', document.getElementsByClassName('fas fa-circle'));
  // handleRight();
  b++;
}

$right.addEventListener('click', handleRight);
$left.addEventListener('click', handleLeft);
