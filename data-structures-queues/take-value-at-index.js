/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return;
  let i = 0;
  while (i < index) {
    const firstValue = queue.dequeue();
    queue.enqueue(firstValue);
    i++;
  }
  return queue.dequeue();
}
