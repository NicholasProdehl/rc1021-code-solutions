const fs = require('fs');
const console = require('console');
fs.writeFile('./note-to-self.txt', process.argv[2], err => {
  if (err) throw err;
  console.log('The file has been saved!');
});
