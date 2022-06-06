/* exported pick */
function pick(source, keys) {
  var obj = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key in source && source[key] !== undefined) {
      obj[key] = source[key];
    }
  }
  return obj;
}
