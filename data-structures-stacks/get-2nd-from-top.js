/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return;
  }
  const holder = stack.pop();
  if (stack.peek() === undefined) {
    stack.push(holder);
    return;
  }
  stack.push(holder);
  const first = stack.pop();
  const returnValue = stack.pop();
  stack.push(returnValue);
  stack.push(first);
  return returnValue;
}
