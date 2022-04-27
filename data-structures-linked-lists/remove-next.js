/* exported removeNext */

function removeNext(list) {
  if (list.next === null) return;
  const remove = list.next.next;
  list.next = remove;
}
