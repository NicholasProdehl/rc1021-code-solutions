const fs = require('fs');
let data = require('./data.json');

// console.log('Data is: ', data);
// console.log('Data nextID is: ', data.nextId);
// console.log('Data notes are: ', data.notes);
const keys = Object.keys(data.notes);
const ID = data.nextId;
switch (process.argv[2]) {
  case 'read': for (let i = 0; i < keys.length; i++) {
    console.log(keys[i] + ': ' + data.notes[keys[i]]);
  }
    break;
  case 'create':
    data.notes[ID] = process.argv[3];
    data.nextId++;
    data = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', data, err => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
    break;
  case 'update':
    data.notes[process.argv[3]] = process.argv[4];
    data = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', data, err => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
    break;
  case 'delete':
    delete data.notes[process.argv[3]];
    data = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', data, err => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
}
