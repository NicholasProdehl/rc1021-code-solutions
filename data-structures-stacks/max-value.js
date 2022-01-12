/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let next;
  let prev = -Infinity;
  while (stack.peek() !== undefined) {
    next = stack.pop();
    if (next > prev) {
      prev = next;
    }
  }
  return prev;
}
