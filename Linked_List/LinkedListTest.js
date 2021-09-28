import LinkedList from "./LinkedList.js";

let test1 = new LinkedList();
test1.prepend(22);
test1.prepend(24);
test1.prepend(26);
test1.append(25);
test1.append(27);
test1.append("Woohoo");
test1.fromArray(["Andrew", "John"]);
console.log(test1.toArray(), "\n");
console.log(test1.toString(), "\n");
console.log("Delete ending Node:", test1.deleteTail(), "\n");
console.log("Delete starting Node:", test1.deleteHead(), "\n");
console.log(test1.toArray(), "\n");
console.log(test1.toString(), "\n");
