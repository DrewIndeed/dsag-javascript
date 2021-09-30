import LinkedListNode from "./LinkedListNode.js";

export default class LinkedListReimplement {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(newValue) {
    const newNode = new LinkedListNode(newValue, this.head);
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
    return this;
  }

  append(newValue) {
    const newNode = new LinkedListNode(newValue);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }
}
