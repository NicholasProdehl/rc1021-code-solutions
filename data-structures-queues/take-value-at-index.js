/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let holder;
  for (let i = 0; i < index; i++) {
    holder = queue.dequeue();
    queue.enqueue(holder);
  }
  return queue.dequeue();
}
