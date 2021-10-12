function convertsMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('There are ', convertsMinutesToSeconds(5), ' seconds.');

function greeting(name) {
  return 'Hey, ' + name;
}
console.log(greeting('Brett'));

function getArea(width, height) {
  return width * height;
}
console.log('The area is ', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
console.log("The person's first name is ", getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  return array[array.length - 1];
}
console.log('The last element of the array is ', getLastElement(['propane', 'and', 'propane', 'accessories']));
