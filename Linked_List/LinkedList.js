import LinkedListNode from "./LinkedListNode.js";

export default class LinkedList {
  // constructor with two pointers to represent head and tail of LinkedList
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // INSERT AT THE BEGINNING
  prepend(newValue) {
    // create new NODE to contain desired VALUE + point to the current HEAD
    const newNode = new LinkedListNode(newValue, this.head);

    // Set the new NODE as the head of the LinkedList
    this.head = newNode;

    // If TAIL is not set, set TAIL to new NODE also
    if (!this.tail) this.tail = newNode;

    // return updated LINKEDLIST
    return this;
  }

  // INSERT AT THE END
  append(newValue) {
    // create new NODE to contain desired VALUE
    const newNode = new LinkedListNode(newValue);

    // if it is the first NODE
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    // otherwise, point TAIL NEXT to new NODE + set TAIL as new NODE
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // return updated LINKEDLIST
    return this;
  }

  // DELETE AT THE BEGINNING
  deleteHead() {
    // if the LINKEDLIST is empty
    if (!this.head) return "Linked List is empty";

    // store target HEAD in a variable
    const deleteHead = this.head;

    // if there is a NODE after head or HEAD NEXT exists, set HEAD as that NODE
    if (this.head.next) this.head = this.head.next;
    // otherwise, there is nothing after HEAD -> LINKEDLIST is empty
    else {
      // set back to initial state
      this.head = null;
      this.tail = null;
    }

    // return deleted HEAD value
    return deleteHead.value;
  }

  // DELETE AT THE END
  deleteTail() {
    // store target TAIL in a variable
    const deleteTail = this.tail;

    // if the LINKEDLIST is empty
    if (!this.head) return "Linked List is empty";

    // if LINKEDLIST has only 1 NODE
    if (this.head === this.tail) {
      // set back to initial state
      this.head = null;
      this.tail = null;
      // return delete TAIL value
      return deleteTail.value;
    }

    // if LINKEDLIST has more 1 NODE
    let currentNode = this.head;

    // while current NODE NEXT is not null (not the end of the list)
    while (currentNode.next) {
      // if reached the SECOND LAST NODE
      if (!currentNode.next.next) {
        currentNode.next = null;

        // if not, jump to next node
      } else currentNode = currentNode.next;
    }

    // set TAIL as current node
    this.tail = currentNode;

    // return deleted TAIL value
    return deleteTail.value;
  }

  deleteAllOccrencesByKey(key) {
    // if the LINKEDLIST is empty
    if (!this.head) return "Linked List is empty";

    while (this.head.value === key) {
      this.head = this.head.next;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === key) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }
    return this;
  }

  fromArray(arrayOfValues) {
    arrayOfValues.forEach((value) => this.append(value));
    return this;
  }

  toArray() {
    let nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return nodes.length == 0 ? "Linked List is empty" : nodes;
  }

  toString() {
    const nodes = this.toArray();
    let resultString = "";
    if (nodes != "Linked List is empty") {
      nodes.map(
        (value, index) =>
          (resultString +=
            index == nodes.length - 1
              ? `[${index + 1} >> ${value}]`
              : `[${index + 1} >> ${value}] --> `)
      );
    }
    return resultString == "" ? "Linked List is empty" : resultString;
  }
}
