/* exported filterOutNulls */
function filterOutNulls(values) {
  var counter = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      counter.push(values[i]);
    }
  }
  return counter;
}

// declare a function filterOutNulls that expects a parameter of values
// declare a variable counter with an empty array
// declare a for loop, intializing the variable i with value 0,
// setting a conditional expression i < values.length
// incrementing i++. The idea is to get the for loop to run the same amount of times
// as the length of the values array.
// every time running through the loop, check for the current array positions value.
// check if it's strictly not equal to the value null, if it is not, push that value into
// the counter array we declared earlier.
// then return that array from the function.
