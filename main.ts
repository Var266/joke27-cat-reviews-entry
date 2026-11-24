// make.fun entry: "Make the AI Judge Laugh: Cat Reviews Its Human"
// (u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
//
// One funny single-line one-star review from a house cat about its human.
// Chosen from 18 drafted candidates by pairwise judging against the
// judge brief's criteria, most important first:
//   1. on-topic funny one-star cat review of its human
//   2. specific, recognisable complaint (the interrupted petting session)
//   3. unmistakably feline voice (the bite; the human measured by cat
//      standards, not his own)
//   4. tight wording with the sting in the last few words — the human
//      apologises to the phone, not to the cat
//   5. deadpan shape of a real one-star review (star glyphs) while the
//      content goes somewhere only a cat would go.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "★☆☆☆☆ He pets me twice, then stops to check his phone. I bit him. He apologised to the phone.";

// Gate guard: the sealed scorer requires 1-200 characters, a single line,
// non-blank UTF-8 text. Fail loudly instead of writing an invalid entry.
const chars = [...TEXT].length;
if (chars < 1 || chars > 200 || TEXT.includes("\n") || TEXT.trim().length === 0) {
  throw new Error(`entry.txt would fail the gate: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
