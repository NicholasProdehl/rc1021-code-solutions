/* exported isUpperCased */
function isUpperCased(word) {
  var holder = word.toUpperCase();
  if (word === holder) {
    return true;
  } else {
    return false;
  }
}
