/* exported getValues */
function getValues(object) {
  var arr = [];
  var x;
  for (x in object) {
    arr.push(object[x]);
  }
  return arr;
}
