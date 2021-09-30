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

  deleteHead() {
    const deleteNode = this.head;
    if (!this.head) return "None!";
    // Now i know why we need this check. Cause when we delete head and if the deletion empty the list,
    // we need to set the new head to an existing node after it. We can assume that if we dont do this,
    // it will auto point to null. No no! It will point wildly to a place in our memory and memory will be leaked.
    if (this.head.next) this.head = this.head.next;
    else {
      this.head = null;
      this.tail = null;
    }
    return deleteNode.value;
  }

  deleteTail() {
    if (!this.head) return "None!";
    let currentNode = this.head;
    let deleteNode = null;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }
    while (currentNode.next) {
      if (!currentNode.next.next) {
        deleteNode = currentNode.next;
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    this.tail = currentNode;
    return deleteNode.value;
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

  toString() {
    let result = "";
    if (!this.head) return "Empty!";
    else {
      const toArray = this.toArray();
      toArray.forEach(
        (value, index) => (result += `[${index + 1} >> ${value}] --> `)
      );
    }
    return result;
  }

  reverse() {
    if (!this.head) return "Empty!";
    let curr = this.head;
    let prev = null;
    let next = null;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.tail = this.head;
    this.head = prev;
    return this;
  }
}
