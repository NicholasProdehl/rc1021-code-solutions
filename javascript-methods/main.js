var num1 = 5;
var num2 = 25;
var num3 = 125;

var maximumValue = Math.max(num1, num2, num3);
console.log('The max value is: ', maximumValue);

var heroes = ['Frodo', 'Samwise', 'Aragorn', 'Gimli', 'Legolas'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('The random index is: ', randomIndex);
var randomHero = heroes[randomIndex];
console.log('The random hero is: ', randomHero);

var library = [
  {
    title: '12 Rules For Life',
    author: 'Jordan Peterson'
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear'
  },
  {
    title: 'Lord Of The Rings',
    author: 'J. R. R. Tolkien'
  }
];

var lastBook = library.pop();
console.log('The last book is: ', lastBook);

var firstBook = library.shift();
console.log('The first book is: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);

var fullName = 'Nicholas Prodehl';
var firstAndLastName = fullName.split(' ');
console.log('First and Last Name: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
