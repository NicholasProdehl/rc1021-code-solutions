/* exported getWords */
function getWords(string) {
  var arr = [];
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === ' ') {
      arr.push(string.slice(counter, i));
      counter = i + 1;
    } else if (i === string.length - 1) {
      arr.push(string.slice(counter, string.length));
    }
  }
  return arr;
}
