/* exported capitalizeWord */
function capitalizeWord(word) {
  word = word.toLowerCase();
  if (word === 'javascript') {
    word = 'JavaScript';
  } else {
    word = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return word;
}

// sets all letters in word to lowercase
// checks to see if string is JavaScript, if so, always return "JavaScript"
// otherwise set word to the first character upper cased concatenated to
// the rest of the string.
