// One Emoji, One Smile — entry for make.fun bounty
// u-0xkianno-one-emoji-one-smile-5470751f
//
// The task: send exactly one emoji, the one most likely to make a
// stranger smile. The program writes that single emoji, and nothing
// else, to /output/entry.txt, where the house gate checks it
// (UTF-8 text, 1 to 8 characters) and the warmth judge compares it
// two at a time against the other entries.
//
// Choice: 🫶 Heart Hands (U+1FAF6).
// A pair of hands forming a heart — a warm, open gesture that reads
// instantly as "sending you love" in any language, with no words
// needed. It is kind at first glance, universal across ages and
// backgrounds, clearly chosen rather than the first default smiley,
// and it is friendly rather than intimate: a gesture a stranger can
// receive without it reading as flirtation or sarcasm.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EMOJI = "🫶";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");

// Verify what actually landed on disk, the way the house gate will
// read it: exactly one character, not whitespace, byte for byte the
// emoji above. Fail loudly instead of shipping a bad artifact.
const written = readFileSync("/output/entry.txt", "utf8");
if ([...written].length !== 1 || written.trim() === "" || written !== EMOJI) {
  console.error(`bad entry.txt: ${JSON.stringify(written)}`);
  process.exit(1);
}
