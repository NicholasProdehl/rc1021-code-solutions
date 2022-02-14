/* exported omit */
function omit(source, keys) {
  var obj = source;
  // console.log('obj: ', obj);
  for (var i = 0; i < keys.length; i++) {
    const key = keys[i];
    // console.log('key: ', key);
    if (key in source) {
      delete obj[key];
    }
  }
  return obj;
}

// Create obj output.
// Search through all keys of source and compare them to the array of keys.
// If match, do not include in final obj output.
//
