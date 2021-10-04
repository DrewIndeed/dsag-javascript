import DLL from "./DLL.js";

const testDLL = new DLL();
testDLL.append(456);
testDLL.append(567);
testDLL.append(6789);
testDLL.prepend(22);
testDLL.prepend(123);
testDLL.prepend(88);
testDLL.prepend(54);
console.log(testDLL.toString());