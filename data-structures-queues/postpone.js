/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) return;
  const post = queue.dequeue();
  queue.enqueue(post);
}
