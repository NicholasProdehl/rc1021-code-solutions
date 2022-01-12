/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  let prev = queue.dequeue();
  if (queue.peek() === undefined) {
    return prev;
  }
  while (queue.peek() < prev) {
    queue.enqueue(prev);
    prev = queue.dequeue();
  }
  return prev;
}
