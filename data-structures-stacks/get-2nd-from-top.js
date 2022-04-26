/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.print() === 'Stack { <empty> }') {
    return undefined;
  } else {
    const value = stack.pop();
    const secondValue = stack.peek();
    stack.push(value);
    return secondValue;
  }
}
