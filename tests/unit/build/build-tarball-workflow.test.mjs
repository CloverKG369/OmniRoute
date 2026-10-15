import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");

test("tarball workflow uses webpack for the hosted Next.js build", () => {
  const workflow = readFileSync(path.join(repoRoot, ".github/workflows/build-tarball.yml"), "utf8");

  assert.match(
    workflow,
    /      - run: npm run build:fast\n        env:\n          OMNIROUTE_USE_TURBOPACK: "0"/
  );
});
