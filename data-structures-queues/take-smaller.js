/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const holder1 = queue.dequeue();
  if (queue.peek() === undefined) {
    return holder1;
  }
  const holder2 = queue.dequeue();
  if (holder1 > holder2) {
    queue.enqueue(holder1);
    return holder2;
  }
  queue.enqueue(holder2);
  return holder1;
}
