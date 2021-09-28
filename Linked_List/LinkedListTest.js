import LinkedList from './LinkedList.js';

let test1 = new LinkedList();
test1.prepend(22);
test1.prepend(24);
test1.prepend(26);
test1.append(25);
test1.append(27);
test1.append("Woohoo");
console.log(test1.toArray());
console.log(test1.toString());