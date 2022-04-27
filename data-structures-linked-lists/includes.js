/* exported includes */

function includes(list, value) {
  let boolean = false;
  while (list.next !== null) {
    if (list.data === value) {
      boolean = true;
    }
    list = list.next;
  }
  if (list.data === value) {
    boolean = true;
  }
  return boolean;
}
