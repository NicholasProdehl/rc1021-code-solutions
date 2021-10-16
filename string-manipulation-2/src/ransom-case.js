/* exported ransomCase */
function ransomCase(string) {
  var word = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      word += string.charAt(i).toLowerCase();
    } else {
      word += string.charAt(i).toUpperCase();
    }
  }
  return word;
}

// declare function ransomCase(string). declare a word variable to hold the new string
// for loop that goes through the individual characters and detect if the charAt is
// at an equal or odd value, then assign the toLowerCase and toUpperCase to either one
// respetively. This is then concatenated onto the variable word to be returned
// at the end of the function.
