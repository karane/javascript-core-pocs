const out = (...msg) => {
  console.log(...msg);
  document.getElementById("output").textContent += msg.join(" ") + "\n";
};

out("=== Array Creation ===");
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true];
const empty = [];
empty.push(10, 20);

out("numbers:", numbers);
out("mixed:", mixed);
out("empty:", empty, "\n");

out("=== Iteration ===");
out("for loop:");
for (let i = 0; i < numbers.length; i++) {
  out(numbers[i]);
}

out("\nfor...of:");
for (const n of numbers) {
  out(n);
}

out("\n=== Higher-Order Methods ===");

// map
const doubled = numbers.map(n => n * 2);
out("doubled:", doubled);

// filter
const evens = numbers.filter(n => n % 2 === 0);
out("evens:", evens);

// reduce
const sum = numbers.reduce((acc, n) => acc + n, 0);
out("sum:", sum);

const combined = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((a, n) => a + n, 0);

out("doubledEvensSum:", combined);
