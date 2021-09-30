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

  toArray() {
    const nodes = [];
    if (!this.head) return "Empty!";
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  fromArray(valuesArray) {
    valuesArray.forEach((value) => this.append(value));
    return this;
  }
}
