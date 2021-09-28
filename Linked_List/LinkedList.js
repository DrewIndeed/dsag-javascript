import LinkedListNode from "./LinkedListNode.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // add at the beginning
  prepend(newValue) {
    // set new Node as Head
    const newNode = new LinkedListNode(newValue);
    this.head = newNode;

    // if there is no tail, set new Node as Tail also
    if (!this.tail) this.tail = newNode;
    return this;
  }

}
