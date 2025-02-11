import { describe, it, expect } from "vitest";
import { camelCase } from "./keys";

const TEST_CASES: [unknown, number | undefined, unknown][] = [
  [
    {
      first_name: "bob",
      last_name: "the builder",
      credentials: [{ built_things: true }],
    },
    Infinity,
    {
      firstName: "bob",
      lastName: "the builder",
      credentials: [{ builtThings: true }],
    },
  ],
  [
    {
      first_name: "bob",
      price: 8.21,
      favoriteAnimals: ["red", "green", 3, null, 7],
    },
    Infinity,
    {
      firstName: "bob",
      price: 8.21,
      favoriteAnimals: ["red", "green", 3, null, 7],
    },
  ],
  [
    {
      TEST_KEY: {
        FOO_BAR: true,
      },
    },
    undefined,
    {
      testKey: {
        FOO_BAR: true,
      },
    },
  ],
  [{ TEST: true }, 0, { TEST: true }],
  [null, 1, null],
];

describe("change keys", () => {
  for (const [input, depth, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(camelCase(input, depth)).toEqual(result);
    });
  }
});
