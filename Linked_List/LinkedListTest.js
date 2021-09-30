// import LinkedList from "./LinkedList.js";
import LinkedListReimplement from "./LinkedListReimplement.js";

// create an empty LinkedList
// let test1 = new LinkedList();

// // add data, duplicates using append() and preprend()
// test1.prepend(22);
// test1.prepend(24);
// test1.append(26);
// test1.append(26);
// test1.append(26);
// test1.prepend(26);
// test1.prepend(26);
// test1.prepend(26);
// test1.append(25);
// test1.append(26);
// test1.append(26);
// test1.append(27);
// test1.append(26);
// test1.append(26);
// test1.append("Julian");

// // add data using an array of values
// test1.fromArray(["Andrew", "John"]);

// // this is to test is delete all occurences working at the end of the linked list
// test1.append(26);
// test1.append(26);
// test1.append(26);

// // print first time to see overall linked list
// console.log(test1.toArray(), "\n");
// console.log(test1.toString(), "\n");

// // delete from head
// console.log("Delete starting Node:", test1.deleteHead(), "\n");

// // delete from tail
// console.log("Delete ending Node:", test1.deleteTail(), "\n");

// // delete all occurences of a value
// console.log("Deleting all nodes that contains key 26...\n");
// test1.deleteAllOccrencesByKey(26);

// // print second time to updates
// console.log(test1.toArray(), "\n");
// console.log(test1.toString(), "\n");

// // print third time to see linkedlist after reverse
// console.log("Reversing linked list...\n");
// test1.reverse();
// console.log(test1.toArray(), "\n");
// console.log(test1.toString(), "\n");

// _________________________________________________________________________________________________________//
let test2 = new LinkedListReimplement();
test2.prepend(22);
test2.prepend(24);
test2.append(26);
test2.append(26);
test2.append(26);
test2.prepend(26);
test2.prepend(26);
test2.prepend(99);
test2.append(25);
test2.append(26);
test2.append(26);
test2.append(27);
test2.append(26);
test2.append(26);
test2.append("Julian");
test2.fromArray(["Andrew", "John"]);
console.log("\n\t\t\t\t\t\t\t---- Default Printing ----\n");
console.log(test2);
console.log("\n\t\t\t\t\t\t\t---- toArray() ----\n");
console.log(test2.toArray());
console.log("\n\t\t\t\t\t\t\t---- toString() ----\n");
console.log(test2.toString(), "\n");
console.log("\n\t\t\t\t\t\t\t---- deleteHead() ----\n");
console.log("Delete head 1:", test2.deleteHead());
console.log("Delete head 2:", test2.deleteHead());
console.log("Delete head 3:", test2.deleteHead());
console.log("\n\t\t\t\t\t\t\t---- deleteHead() ----\n");
console.log(test2.toString(), "\n");
console.log("\n\t\t\t\t\t\t\t---- deleteTail() ----\n");
console.log("Delete tail 1:", test2.deleteTail());
console.log("Delete tail 2:", test2.deleteTail());
console.log("Delete tail 3:", test2.deleteTail());
console.log("\n\t\t\t\t\t\t\t---- deleteTail() ----\n");
console.log(test2.toArray());
console.log(test2.toString(), "\n");
console.log("\n\t\t\t\t\t\t\t---- reverse() ----\n");
test2.reverse()
console.log(test2.toArray());
console.log(test2.toString(), "\n");
console.log("\n\t\t\t\t\t\t\t---- deleteAllOccrencesByKey(26) ----\n");
test2.deleteAllOccrencesByKey(26);
console.log(test2.toArray());
console.log(test2.toString(), "\n");
