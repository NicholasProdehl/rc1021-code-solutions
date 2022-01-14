/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const head = list.data;
  const newList = new LinkedList(head, value);
  newList.next.next = list.next;
  // console.log('new list: ', newList.print());
}
