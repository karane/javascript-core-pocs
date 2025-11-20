const log = (msg) => {
  console.log(msg);
  document.getElementById("output").textContent += msg + "\n";
};

log("=== JavaScript Control Flow Practice ===");

// --- IF / ELSE ---
let age = 16;

log("\n--- if / else ---");
if (age >= 18) {
  log("You are an adult.");
} else if (age >= 13) {
  log("You are a teenager.");
} else {
  log("You are a child.");
}

// --- SWITCH ---
let day = 3;

log("\n--- switch ---");
switch (day) {
  case 1:
    log("Monday");
    break;
  case 2:
    log("Tuesday");
    break;
  case 3:
    log("Wednesday");
    break;
  case 4:
    log("Thursday");
    break;
  case 5:
    log("Friday");
    break;
  default:
    log("Weekend");
    break;
}

// --- FOR LOOP ---
log("\n--- for loop ---");
for (let i = 1; i <= 5; i++) {
  log(`Counting: ${i}`);
}

// --- WHILE LOOP ---
log("\n--- while loop ---");
let count = 0;
while (count < 3) {
  log(`Loop iteration: ${count}`);
  count++;
}

// --- DO...WHILE LOOP ---
log("\n--- do...while loop ---");
let num = 0;
do {
  log(`Number is ${num}`);
  num++;
} while (num < 3);

// --- BREAK and CONTINUE ---
log("\n--- break and continue ---");
for (let i = 0; i < 6; i++) {
  if (i === 2) {
    log("Skipping 2 (continue)");
    continue;
  }
  if (i === 5) {
    log("Breaking at 5 (break)");
    break;
  }
  log(`i = ${i}`);
}

// --- NESTED LOOPS ---
log("\n--- nested loops ---");
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 3; j++) {
    log(`i=${i}, j=${j}`);
  }
}
