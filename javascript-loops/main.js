/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  for (var i = currentNumber; i <= 10; i++) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  for (var currentNumber = 2; currentNumber <= 20; currentNumber += 2) {
    evenNumbers.push(currentNumber);
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  var repeated = '';
  for (var count = 1; count <= times; count++) {
    repeated += word;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled[i] = numbers[i] * 2;
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];
  for (var x in object) {
    keys.push(x);
    console.log(x);
  }
  return keys;
}

function getValues(object) {
  var values = [];
  for (var x in object) {
    values.push(object[x]);
  }
  return values;
}
