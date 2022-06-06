/* exported omit */
function omit(source, keys) {
  var Obj = { ...source };
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key in source) {
      delete Obj[key];
    }
  }
  return Obj;
}

// Create obj output.
// Search through all keys of source and compare them to the array of keys.
// If match, do not include in final obj output.
