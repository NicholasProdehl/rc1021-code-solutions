/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const pone = queue.dequeue();
  queue.enqueue(pone);
}
