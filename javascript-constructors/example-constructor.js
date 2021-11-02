function ExampleConstructor() {

}
console.log('value of exampleconstructor prototype is: ', ExampleConstructor.prototype);
console.log('Type of exampleconstructor prototype is: ', typeof ExampleConstructor.prototype);

var examp = new ExampleConstructor();
console.log('Value of example is: ', examp);
var exampInstance = (examp instanceof ExampleConstructor);
console.log(exampInstance);
