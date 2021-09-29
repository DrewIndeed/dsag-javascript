import LinkedList from "./LinkedList.js";

// create an empty LinkedList
let test1 = new LinkedList();

// add data, duplicates using append() and preprend()
test1.prepend(22);
test1.prepend(24);
test1.append(26);
test1.append(26);
test1.append(26);
test1.prepend(26);
test1.prepend(26);
test1.prepend(26);
test1.append(25);
test1.append(26);
test1.append(26);
test1.append(27);
test1.append(26);
test1.append(26);
test1.append("Julian");

// add data using an array of values
test1.fromArray(["Andrew", "John"]);

// this is to test is delete all occurences working at the end of the linked list
test1.append(26);
test1.append(26);
test1.append(26);

// print first time to see overall linked list
console.log(test1.toArray(), "\n");
console.log(test1.toString(), "\n");

// delete from head
console.log("Delete starting Node:", test1.deleteHead(), "\n");

// delete from tail
console.log("Delete ending Node:", test1.deleteTail(), "\n");

// delete all occurences of a value
test1.deleteAllOccrencesByKey(26);

// print second time to updates
console.log(test1.toArray(), "\n");
console.log(test1.toString(), "\n");
