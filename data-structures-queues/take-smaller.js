/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) return;
  const firstValue = queue.dequeue();
  if (queue.peek() === undefined) return firstValue;
  const secondValue = queue.dequeue();
  if (firstValue < secondValue) {
    queue.enqueue(secondValue);
    return firstValue;
  } else if (firstValue === secondValue) {
    queue.enqueue(firstValue);
    return firstValue;
  } else {
    queue.enqueue(firstValue);
    return secondValue;
  }

}
