/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.print() === 'Stack { <empty> }') {
    return undefined;
  } else {
    const x = stack.pop();
    stack.push(value);
    stack.push(x);
  }
}
