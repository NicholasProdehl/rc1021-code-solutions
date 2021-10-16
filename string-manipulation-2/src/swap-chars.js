/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var arr = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      arr += string.charAt(secondIndex);
    } else if (i === secondIndex) {
      arr += string.charAt(firstIndex);
    } else { arr += string.charAt(i); }
  }
  return arr;
}
