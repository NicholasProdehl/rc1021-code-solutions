let counter = 3;
function handleInterval() {
  if (counter) {
    console.log(counter);
    counter--;
  } else {
    console.log('Blast off!');
    clearInterval(cancel);
  }
}
const cancel = setInterval(handleInterval, 1000);
