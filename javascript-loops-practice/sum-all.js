/* exported sumAll */
function sumAll(numbers) {
  var counter = 0;
  for (var i = 0; i < numbers.length; i++) {
    counter += numbers[i];
  }
  return counter;
}
