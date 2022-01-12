/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const holder = queue.dequeue();
  if (queue.peek() === undefined) {
    return holder;
  }
  queue.enqueue(holder);
  return queue.dequeue();
}
