import { describe, it, expect } from "vitest";

import { findNaughtyStep } from "./findNaughtyStep";

describe("findNaughtyStep", () => {
  it("should be a function", () => {
    expect(typeof findNaughtyStep).toBe("function");
  });

  it("should param 'original' must be an string", () => {
    expect(() => findNaughtyStep(1, "sopatew")).toThrow(
      "The param 'original' must be an string"
    );
  });

  it("should param 'modified' must be an string", () => {
    expect(() => findNaughtyStep("queso", ["a"])).toThrow(
      "The param 'modified' must be an string"
    );
  });

  it("should return 'e'", () => {
    const original = "";
    const modified = "abcde";

    expect(findNaughtyStep(original, modified)).toBe("abcde");
  });

  it("should return ''", () => {
    const original = "sopita";
    const modified = "";

    expect(findNaughtyStep(original, modified)).toBe("");
  });

  it("should return ''", () => {
    const original = "queso";
    const modified = "queso";

    expect(findNaughtyStep(original, modified)).toBe("");
  });

  it("should return ''", () => {
    const original = "queso";
    const modified = "queso";

    expect(findNaughtyStep(original, modified)).toBe("");
  });

  it("should return 'e'", () => {
    const original = "queso";
    const modified = "queeso";

    expect(findNaughtyStep(original, modified)).toBe("e");
  });

  it("should return 'f'", () => {
    const original = "stepfor";
    const modified = "stepor";

    expect(findNaughtyStep(original, modified)).toBe("f");
  });
});
