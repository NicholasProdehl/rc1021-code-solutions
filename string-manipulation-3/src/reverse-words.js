/* exported reverseWords */
function reverseWords(string) {
  const stringsArray = string.split(' ');
  let finalString = '';
  for (let i = 0; i < stringsArray.length; i++) {
    if (i === stringsArray.length - 1) {
      const reversedString = stringsArray[i].split('');
      const reverseArray = reversedString.reverse();
      const joinedArray = reverseArray.join('');
      finalString += joinedArray;
    } else {
      const reversedString = stringsArray[i].split('');
      const reverseArray = reversedString.reverse();
      const joinedArray = reverseArray.join('');
      finalString += joinedArray + ' ';
    }
  }
  return finalString;
}
