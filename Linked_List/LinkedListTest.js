import LinkedList from './LinkedList.js';

let test1 = new LinkedList();
test1.prepend(22);
test1.prepend(24);
test1.prepend(26);
console.log(test1.toArray());