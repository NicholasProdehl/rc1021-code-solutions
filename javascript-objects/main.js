var student = {
  firstName: 'Nicholas',
  lastName: 'Prodehl',
  age: '22'
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Full Name is: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Broista';
console.log('Do I live in Irvine?: ', student.livesInIrvine);
console.log('My previous occupation is: ', student.previousOccupation);
console.log('Value of student is: ', student);
var vehicle = {
  make: 'Geo',
  model: 'Metro',
  year: 1998
};

vehicle.color = 'Shitty Red';
vehicle.isConvertible = false;
console.log('The color of the vehicle is: ', vehicle.color);
console.log('Is the car a convertible?: ', vehicle.isConvertible);
console.log(vehicle);

var pet = {
  name: 'Roo',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log(pet);
