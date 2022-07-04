/* exported isAnagram */
function isAnagram(firstString, secondString) {
  firstString.toLowerCase();
  secondString.toLowerCase();
  const firstTemp = firstString.split(' ').join('');
  const secondTemp = secondString.split(' ').join('');
  const str1 = firstTemp.split('');
  const str2 = secondTemp.split('');
  str1.sort();
  str2.sort();
  if (str1.length !== str2.length) {
    return false;
  } else {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        return false;
      }
    }
  }
  return true;
}
