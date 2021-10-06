import DLLNode from "./DLLNode.js";

export default class DLL {
  // constructor with two pointers to represent head and tail of LinkedList
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // INSERT AT THE BEGINNING
  prepend = (value) => {
    // create new NODE to contain desired VALUE
    const newNode = new DLLNode(value);

    // if the list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    // otherwise
    else {
      newNode.next = this.head;
      this.head.previous = newNode;
      newNode.previous = null;
      this.head = newNode;
    }

    // return updated list
    return this;
  };

  // INSERT AT THE END
  append = (value) => {
    // create new NODE to contain desired VALUE
    const newNode = new DLLNode(value);

    // if the list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    // otherwise
    else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      newNode.next = null;
      this.tail = newNode;
    }

    // return updated list
    return this;
  };

  // DELETE AT THE BEGINNING
  deleteHead = () => {
    // if the list is empty
    if (!this.head) return "Empty!";

    // if the list has 1 item
    if (this.head === this.tail) {
      const deleteNode = this.head;
      this.head = null;
      this.tail = null;
      return deleteNode.value;
    }

    // otherwise, the list has more than 1 item
    this.head = this.head.next;
    const deleteNode = this.head.previous;
    this.head.previous = null;

    // return deleted node's value
    return deleteNode.value;
  };

  // DELETE AT THE END
  deleteTail = () => {
    // if the list is empty
    if (!this.head) return "Empty!";

    // if the list has 1 item
    if (this.head === this.tail) {
      const deleteNode = this.tail;
      this.head = null;
      this.tail = null;
      return deleteNode.value;
    }

    // otherwise, the list has more than 1 item
    this.tail = this.tail.previous;
    const deleteNode = this.tail.next;
    this.tail.next = null;

    // return deleted node's value
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

  reverseByValue = () => {
    if (!this.head) return "Empty!";
    if (this.head === this.tail) return this;
    let left = this.head;
    let right = this.head;

    //Move to the right end
    while (right.next) right = right.next;

    //Swap the data at both the ends
    while (left !== right && left.previous !== right) {
      let t = left.value;
      console.log(t);
      console.log(right.value);
      left.value = right.value;
      right.value = t;

      left = left.next;
      right = right.previous;
    }

    //Return the reversed list
    return this;
  };
}
