const fs = require('fs');
const data = String(Math.floor(Math.random() * 100));
const console = require('console');
fs.writeFile('./random.txt', data, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('The file has been saved!');
  }
});
