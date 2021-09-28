import LinkedListNode from "./LinkedListNode.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // add at the beginning
  prepend(newValue) {
    // set new Node as Head
    const newNode = new LinkedListNode(newValue, this.head);
    this.head = newNode;

    // if there is no tail, set new Node as Tail also
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

  deleteTail() {
    const deleteTail = this.tail;
    // linked list is empty
    if (!this.head) return "Linked List is empty";
    // linked list has only 1 node
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deleteTail;
    }
    // if linked list has more than 1 node
    let currentNode = this.head;
    while (currentNode) {
      if (!currentNode.next.next) {
        currentNode.next = null;
        break;
      } else currentNode = currentNode.next;
    }
    this.tail = currentNode;
    return deleteTail.value;
  }


  // com
  toArray() {
    let nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  toString() {
    const nodes = this.toArray();
    let resultString = "";
    nodes.map(
      (value, index) =>
        (resultString +=
          index == nodes.length - 1
            ? `[${index + 1} >> ${value}]`
            : `[${index + 1} >> ${value}] --> `)
    );
    return resultString;
  }
}
