/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() !== undefined) {
    const holder = stack.pop();
    stack.push(value);
    stack.push(holder);
  }
}
