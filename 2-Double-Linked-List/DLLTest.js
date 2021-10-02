import DLL from "./DLL.js";

const testDLL = new DLL();
testDLL.prepend(123);
testDLL.prepend(88);
testDLL.prepend(54);
testDLL.prepend(22);
testDLL.prepend(1000);
console.log(testDLL.toString());