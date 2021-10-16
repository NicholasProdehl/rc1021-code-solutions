/* exported truncate */
function truncate(length, string) {
  return string.slice(0, length) + '...';
}

// I tried a bunch of goofy things, then realized I could slice()
// off the desired length and concatenate "...".
