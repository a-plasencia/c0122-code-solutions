/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const insertList = new LinkedList(value);
  const nextList = list.next;
  insertList.next = nextList;
  list.next = insertList;
}
