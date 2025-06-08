
// 🌍 Global Scope
var globalVar = "Global var";
let globalLet = "Global let";
const globalConst = "Global const";

function demoFunction() {
  // 🔵 Function Scope
  var functionVar = "Function var";
  let functionLet = "Function let";
  const functionConst = "Function const";

  console.log("Inside Function:");
  console.log(globalVar);  // ✅ Accessible
  console.log(globalLet);  // ✅ Accessible
  console.log(globalConst); // ✅ Accessible
  console.log(functionVar); // ✅ Accessible
  console.log(functionLet); // ✅ Accessible
  console.log(functionConst); // ✅ Accessible

  if (true) {
    // 🟢 Block Scope
    var blockVar = "Block var"; // 🚨 `var` is NOT block-scoped (it escapes)
    let blockLet = "Block let";
    const blockConst = "Block const";

    console.log("Inside Block:");
    console.log(blockVar);  // ✅ Accessible
    console.log(blockLet);  // ✅ Accessible
    console.log(blockConst); // ✅ Accessible
  }

  console.log("Outside Block:");
  console.log(blockVar);  // ✅ (Bad behavior: `var` leaks out)
// console.log(blockLet);  ❌ ERROR: Not accessible outside the block
// console.log(blockConst); ❌ ERROR: Not accessible outside the block
}

demoFunction();

console.log("Outside Function:");
console.log(globalVar);  // ✅ Accessible
console.log(globalLet);  // ✅ Accessible
console.log(globalConst); // ✅ Accessible
// console.log(functionVar); ❌ ERROR: Not accessible outside function

