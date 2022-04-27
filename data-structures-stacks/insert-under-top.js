/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const x = stack.pop();
  if (x === undefined) {
    return undefined;
  } else {
    stack.push(value);
    stack.push(x);
  }
}
