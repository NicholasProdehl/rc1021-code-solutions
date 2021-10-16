/* exported capitalizeWords */
function capitalizeWords(string) {
  string = string.toLowerCase();
  var holder = string.split(' ');
  string = '';
  for (var i = 0; i < holder.length; i++) {
    holder[i] = holder[i][0].toUpperCase() + holder[i].slice(1);
  }
  string += holder[0];
  for (var b = 1; b < holder.length; b++) {
    string += ' ' + holder[b];
  }
  return string;
}
