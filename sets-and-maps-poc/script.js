const out = (...msg) => {
  console.log(...msg);
  document.getElementById("output").textContent += msg.join(" ") + "\n";
};

out("=== Set: Creation & Basic Use ===");

const mySet = new Set([1, 2, 3, 3, 4]);
out("Initial Set (duplicates removed):", [...mySet]);

mySet.add(5);
mySet.add(2); // ignored because 2 already exists

out("After adding 5 and trying to add 2 again:", [...mySet]);
out("Set has 3?", mySet.has(3));
out("Set size:", mySet.size, "\n");

out("=== Iterating a Set ===");
for (const value of mySet) {
  out("value:", value);
}

out("\n=== Map: Creation & Basic Use ===");

// Map keys can be any type
const myMap = new Map();
myMap.set("name", "Alice");
myMap.set(1, "one");
myMap.set({ x: 10 }, "object-key");

out("Map size:", myMap.size);

// Getting values
out("name:", myMap.get("name"));
out("key=1:", myMap.get(1));

out("\n=== Iterating a Map ===");
for (const [key, value] of myMap) {
  out(`key=${JSON.stringify(key)}, value=${value}`);
}

out("\n=== Map: keys(), values(), entries() ===");
out("keys:", [...myMap.keys()].map(k => JSON.stringify(k)));
out("values:", [...myMap.values()]);
out("entries:", [...myMap.entries()].map(([k, v]) => `[${JSON.stringify(k)}, ${v}]`));

out("\n=== Practical Example ===");

// Counting word frequency using a Map
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const freq = new Map();

for (const w of words) {
  freq.set(w, (freq.get(w) || 0) + 1);
}

out("Word frequencies:", [...freq.entries()]);
