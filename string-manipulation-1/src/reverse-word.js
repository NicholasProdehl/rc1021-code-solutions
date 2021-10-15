/* exported reverseWord */
function reverseWord(word) {
  var arr = '';
  for (var i = 0; i < word.length + 1; i++) {
    arr += word.charAt(word.length - i);
  }
  return arr;
}
