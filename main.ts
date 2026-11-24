// One-Line Office Joke: 24-Hour Sprint — u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162
// One short joke about office life, the sort of line you send a colleague
// after a meeting that should have been an email. The joke turns on the
// meeting itself: the meeting that could have been an email has now spawned
// a follow-up meeting to discuss why the email never arrived.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: 1-200 characters (this line: 117 code points, verified by running it).
// Deterministic: two runs write byte-identical output.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line =
  "The meeting that could have been an email has now spawned a follow-up meeting to discuss why the email never arrived.";

const points = [...line].length;
if (points < 1 || points > 200 || line.trim().length === 0) {
  throw new Error(`entry must be 1-200 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// Read back what was written and confirm it is exactly the line.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== line) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the line");
}
