/* exported pick */
function pick(source, keys) {
  var obj = {};
  var x;
  for (x in source) {
    if (source[x] === keys[x]) {
      obj.push(source[x]);
    }
  }
  return obj;
}
