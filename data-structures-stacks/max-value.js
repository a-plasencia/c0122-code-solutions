/* exported maxValue */

function maxValue(stack) {
  let max = stack.peek();
  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    while (stack.peek() !== undefined) {
      if (max < stack.peek()) {
        max = stack.peek();
      }
      stack.pop();
    }
  }
  return max;
}
