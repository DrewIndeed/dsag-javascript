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

  deleteAllOccrencesByKey(key) {
    if (!this.head) return "Empty!";
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }

    let deleteNode = null;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === key) {
        deleteNode = currentNode;
        // if head is the target to be deleted
        if (deleteNode === this.head) {
          // first, move head to the next node after head
          this.head = deleteNode.next;

          // if the new head is an existing node
          if (this.head) this.head.previous = null;

          // if all the nodes have the same value as the target key
          // -> the deleteNode will reach the tail -> gotta reset the tail
          if (deleteNode === this.tail) this.tail = null;
        }

        // if tail is the target to be deleted
        else if (deleteNode === this.tail) {
          this.tail = deleteNode.previous;
          this.tail.next = null;
        }

        // if a middle is the target to be deleted
        else {
          const prevNode = deleteNode.previous;
          const nextNode = deleteNode.next;
          prevNode.next = nextNode;
          nextNode.previous = prevNode;
        }
      }

      // tranverse to the next node
      currentNode = currentNode.next;
    }

    // return deleted Linked List
    return this;
  }

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

  reverseByPointer() {
    if (!this.head) return "Empty!";
    if (this.head === this.tail) return this;
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      // Store next node.
      nextNode = currNode.next;
      prevNode = currNode.previous;

      // Change next node of the current node so it would link to previous node.
      currNode.next = prevNode;
      currNode.previous = nextNode;

      // Move prevNode and currNode nodes one step forward.
      prevNode = currNode;
      currNode = nextNode;
    }

    // Reset head and tail.
    this.tail = this.head;
    this.head = prevNode;

    return this;
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
      left.value = right.value;
      right.value = t;
      left = left.next;
      right = right.previous;
    }

    //Return the reversed list
    return this;
  };
}
