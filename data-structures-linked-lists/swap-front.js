/* exported swapFront */

function swapFront(list) {
  if (list.next === null) return list;
  const secondPlace = list.next;
  const remove = list.next.next;
  list.next = remove;
  secondPlace.next = list;
  return secondPlace;
}
