/* exported defaults */
function defaults(target, source) {
  for (const key in source) {
    if (!target[key] && target[key] !== null) {
      target[key] = source[key];
    }
  }
}

// Search through source and see if any keys may be
// unique to the target object.
