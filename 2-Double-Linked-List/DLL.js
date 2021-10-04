import DLLNode from "./DLLNode.js";

export default class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend = (value) => {
    const newNode = new DLLNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      newNode.previous = null;
      this.head = newNode;
    }
    return this;
  };

  append = (value) => {
    const newNode = new DLLNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      newNode.next = null;
      this.tail = newNode;
    }
    return this;
  };

  toArray() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  toString() {
    let rs = "";
    const generateJump = (num) => {
      let jumps = "";
      for (let i = 0; i < num; i++) {
        jumps += " ";
      }
      return jumps;
    };
    this.toArray().map(
      (node, index) =>
        (rs += `${generateJump(index)}^--prev - - [${index + 1} >> ${
          node.value
        }] - - next--v\n`)
    );
    return rs;
  }
}
