/* exported isPalindromic */
function isPalindromic(string) {
  let bool = false;
  let stringReverse = '';
  const newString = string.split(' ').join('');
  for (let i = 0; i < newString.length; i++) {
    stringReverse += newString[newString.length - i - 1];
  }
  if (stringReverse === newString) {
    bool = true;
  }
  return bool;
}
