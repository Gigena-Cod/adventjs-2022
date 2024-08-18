import { describe, it, expect } from "vitest";
import { findFirstRepeated } from "./findFirstRepeated";

const MOCKED_GIFT_NOT_REPEATED = [1, 2, 3, 4];

const MOCKED_GIFT_REPEATED = [5, 1, 5, 1];

describe("findFirstRepeated", () => {
  it("should be a function", () => {
    expect(typeof findFirstRepeated).toBe("function");
  });

  it("should params be an array", () => {
    expect(() => findFirstRepeated(1)).toThrow("params must be an array");
  });

  it("should return -1 if array is empty", () => {
    expect(findFirstRepeated([])).toBe(-1);
  });

  it("should return -1", () => {
    expect(findFirstRepeated(MOCKED_GIFT_NOT_REPEATED)).toBe(-1);
  });

  it("should return 5", () => {
    expect(findFirstRepeated(MOCKED_GIFT_REPEATED)).toBe(5);
  });
});
