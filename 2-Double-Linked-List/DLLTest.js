import DLL from "./DLL.js";

const testDLL = new DLL();
testDLL.append(456);
testDLL.append(567);
testDLL.append(6789);
testDLL.prepend(22);
testDLL.prepend(123);
testDLL.prepend(88);
testDLL.prepend(54);
console.log("\n\t\t\t\t---- Default Printing ----\n");
console.log(testDLL.toString());
console.log("\n\t\t\t\t---- deleteHead() ----\n");
console.log("Delete head 1:", testDLL.deleteHead());
console.log("Delete head 2:", testDLL.deleteHead());
console.log("Delete head 3:", testDLL.deleteHead());
console.log(testDLL.toString());