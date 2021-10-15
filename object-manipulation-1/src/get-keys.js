/* exported getKeys */
function getKeys(object) {
  var arr = [];
  var x;
  for (x in object) {
    arr.push(x);
  }
  return arr;
}
