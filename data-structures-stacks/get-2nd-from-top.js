/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const value = stack.pop();
  if (value === undefined) {
    return undefined;
  } else {
    const secondValue = stack.peek();
    stack.push(value);
    return secondValue;
  }
}
