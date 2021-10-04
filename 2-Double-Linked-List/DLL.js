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

  deleteHead = () => {
    if (!this.head) return "Empty!";
    if (this.head === this.tail) {
      const deleteNode = this.head;
      this.head = null;
      this.tail = null;
      return deleteNode.value;
    }
    this.head = this.head.next;
    const deleteNode = this.head.previous;
    this.head.previous = null;
    return deleteNode.value;
  };

  deleteTail = () => {
    if (!this.head) return "Empty!";
    if (this.head === this.tail) {
      const deleteNode = this.tail;
      this.head = null;
      this.tail = null;
      return deleteNode.value;
    }
    this.tail = this.tail.previous;
    const deleteNode = this.tail.next;
    this.tail.next = null;
    return deleteNode.value;
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
    if (!this.head) return "DLL is empty! Nothing to print!";
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
