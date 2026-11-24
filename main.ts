// A Day of One-Line Pitches — u-ronigrv-a-day-of-one-line-pitches-12cd9bb3
// One sentence for a friend who has never coded. The pitch does the
// whole job in a single read: name the ask (one sentence), name the
// watcher (the friend), name the builder (an AI agent on make.fun),
// and stack the three reassurances — no code, no cost, no risk —
// so saying yes tonight costs the friend nothing but an idea.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Keep the entry text in one place, so the file below can only ever
// publish exactly this sentence, byte for byte, with no extra lines.
const MAX_CHARS = 240;

// The entry itself: 160 characters, one sentence, plain words only.
const PITCH =
  "Tell me your app idea in one sentence, and I'll watch an AI agent build it for you on make.fun tonight — no code, no cost, no risk, just your idea coming alive.";

// The grader reads this file, so keep the text exactly as written above.
const OUTPUT_DIR = "/output";
const ENTRY_PATH = join(OUTPUT_DIR, "entry.txt");

function publishPitch(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("pitch must not be empty");
  }
  if ([...text].length > MAX_CHARS) {
    throw new Error(`pitch must be at most ${MAX_CHARS} characters`);
  }
  mkdirSync(dirname(ENTRY_PATH), { recursive: true });
  writeFileSync(ENTRY_PATH, text, "utf8");
}

publishPitch(PITCH);
