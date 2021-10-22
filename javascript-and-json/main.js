var arr = [
  {
    isbn: '12345',
    title: '12 Rules For Life',
    author: 'Jordan Peterson'
  }
];

console.log(typeof arr);
console.log(arr);

var string = JSON.stringify(arr);

console.log('string:', string);
console.log('type of: ', typeof string);

var jsonString = '{"id" : 123456, "studentName": "Nicholas"}';

console.log('jsonString: ', jsonString);
console.log('Type of jsonString: ', typeof jsonString);

var parsed = JSON.parse(jsonString);

console.log('parsed: ', parsed);
console.log('Type of parsed: ', typeof parsed);
