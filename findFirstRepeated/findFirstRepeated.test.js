// const giftIds = [2, 1, 3, 5, 3, 2]
// const firstRepeatedId = findFirstRepeated(giftIds)
// console.log(firstRepeatedId) // 3
//  Aunque el 2 y el 3 se repiten
//  el 3 aparece primero por segunda vez

// const giftIds2 = [1, 2, 3, 4]
// const firstRepeatedId2 = findFirstRepeated(giftIds2)
// console.log(firstRepeatedId2) // -1
//  Es -1 ya que no se repite ningún número

// const giftIds3 = [5, 1, 5, 1]
// const firstRepeatedId3 = findFirstRepeated(giftIds3)
// console.log(firstRepeatedId3) // 5

import { describe, it, expect } from "vitest";
import { findFirstRepeated } from "./findFirstRepeated";

const MOCKED_GIFT = [2, 1, 3, 5, 3, 2];

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
