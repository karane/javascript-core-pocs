const out = (...msg) => {
  console.log(...msg);
  document.getElementById("output").textContent += msg.join(" ") + "\n";
};

out("=== What is JSON? ===");
out("JSON = JavaScript Object Notation");
out("It is a string format for storing and transporting data.\n");

out("=== JSON.stringify() ===");

const obj = {
  name: "Alice",
  age: 30,
  isStudent: false,
  skills: ["JS", "Python"],
};

const json = JSON.stringify(obj);
out("Stringified JSON:", json);

out("\nPretty-printed JSON:");
const pretty = JSON.stringify(obj, null, 2);
out(pretty, "\n");

out("=== JSON.parse() ===");

const jsonString = `{"x":10,"y":20,"tags":["a","b","c"]}`;

const parsed = JSON.parse(jsonString);
out("Parsed object:", JSON.stringify(parsed));

// Access values
out("parsed.x:", parsed.x);
out("parsed.tags[1]:", parsed.tags[1], "\n");

out("=== parse(): Reviver Function ===");

const jsonWithDates = `{"name":"Bob","created":"2024-01-01T12:00:00Z"}`;

const revived = JSON.parse(jsonWithDates, (key, value) => {
  if (key === "created") return new Date(value);
  return value;
});

out("Revived object:", JSON.stringify(revived));
out("Type of revived.created:", typeof revived.created);
out("Date value:", revived.created.toISOString(), "\n");

out("=== stringify(): Replacer Function ===");

const sensitive = {
  username: "admin",
  password: "12345"
};

const sanitized = JSON.stringify(sensitive, (key, value) => {
  if (key === "password") return "***";
  return value;
});

out("Sanitized JSON:", sanitized, "\n");

out("=== Handling Parse Errors ===");

try {
  JSON.parse("{ invalid json }");
} catch (err) {
  out("Error caught:", err.message);
}

