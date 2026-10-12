import { expect, test } from "vitest";

test("adds numbers", () => {
  expect(1 + 2).toBe(3);
});

test("fails on purpose, so the report is still published when tests fail", () => {
  expect(1 + 1).toBe(3);
});
// touch
