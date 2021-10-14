/* exported countdown */
function countdown(number) {
  var arr = [];
  var counter = number + 1;
  for (var i = 0; i < counter; i++) {
    arr.push(number);
    number--;
  }
  return arr;
}
