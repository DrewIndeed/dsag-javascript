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
