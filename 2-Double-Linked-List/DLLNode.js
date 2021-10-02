export default class DDLNode {
  constructor(previous = null, value, next = null) {
    this.previous = previous;
    this.next = next;
    this.value = value;
  }
}
