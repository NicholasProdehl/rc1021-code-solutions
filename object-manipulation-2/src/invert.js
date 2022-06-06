/* exported invert */
function invert(source) {
  const newObj = {};
  for (const key in source) {
    const filler = source[key];
    newObj[filler] = key;
  }
  return newObj;
}
