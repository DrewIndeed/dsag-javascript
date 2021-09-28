export default class LinkedListNode {
    /**
     * @param {containing value, link to next node} 
    */
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
