/* exported numVowels */
function numVowels(string) {
  var counter = 0;
  string = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === 'a' || string.charAt(i) === 'e' || string.charAt(i) === 'i' || string.charAt(i) === 'o' || string.charAt(i) === 'u') {
      counter++;
    }
  }
  return counter;
}
