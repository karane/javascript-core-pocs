const log = (msg) => {
  console.log(msg);
  document.getElementById("output").textContent += msg + "\n";
};

log("=== JavaScript Functions Practice ===");

// --- Function Declaration ---
log("\n--- Function Declaration ---");
function greet(name) {
  return `Hello, ${name}!`;
}

log(greet("Alice"));
log(greet("Bob"));

// --- Function Expression ---
log("\n--- Function Expression ---");
const multiply = function (x, y) {
  return x * y;
};

log(`3 * 4 = ${multiply(3, 4)}`);
log(`7 * 8 = ${multiply(7, 8)}`);

// --- Arrow Function ---
log("\n--- Arrow Function ---");
const add = (a, b) => a + b;
log(`5 + 6 = ${add(5, 6)}`);

// With multiple statements
const describeAge = (age) => {
  if (age < 18) return "Minor";
  else if (age < 65) return "Adult";
  else return "Senior";
};
log(`Age 10: ${describeAge(10)}`);
log(`Age 40: ${describeAge(40)}`);
log(`Age 80: ${describeAge(80)}`);

// --- Default Parameters ---
log("\n--- Default Parameters ---");
function power(base, exponent = 2) {
  return base ** exponent;
}
log(`power(3) = ${power(3)}`);
log(`power(3, 3) = ${power(3, 3)}`);

// --- Higher-order Function ---
log("\n--- Higher-order Function ---");
function applyOperation(a, b, operation) {
  return operation(a, b);
}

const subtract = (x, y) => x - y;
log(`applyOperation(10, 3, subtract) = ${applyOperation(10, 3, subtract)}`);

// --- Nested Functions ---
log("\n--- Nested Functions ---");
function outerFunction(name) {
  function innerFunction() {
    return `Hi, ${name}, from inside innerFunction!`;
  }
  return innerFunction();
}
log(outerFunction("Karane"));

// --- Anonymous Function Example ---
log("\n--- Anonymous Function Example ---");
setTimeout(function () {
  log("This message appears after 1 second (anonymous function).");
}, 1000);

// --- Arrow Function with setTimeout ---
setTimeout(() => {
  log("This message appears after 2 seconds (arrow function).");
}, 2000);
