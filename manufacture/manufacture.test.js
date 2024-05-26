import { describe, it, expect } from "vitest";
import { manufacture } from "./manufacture";

describe("manufacture", () => {
  it("should be a function", () => {
    expect(typeof manufacture).toBe("function");
  });

  it("should gifts params be an array", () => {
    const gifts = "tren";
    const materials = [];

    const manufactureProps = {
      gifts,
      materials,
    };
    expect(() => manufacture(manufactureProps)).toThrow(
      "gifts must be an array"
    );
  });

  it("should materials params be a string", () => {
    const gifts = [];
    const materials = 1;

    const manufactureProps = {
      gifts,
      materials,
    };
    expect(() => manufacture(manufactureProps)).toThrow(
      "materials must be a string"
    );
  });

  it("should return ['tren', 'oso']", () => {
    const gifts = ["tren", "oso", "pelota"];
    const materials = "tronesa";

    const manufactureProps = {
      gifts,
      materials,
    };
    expect(manufacture(manufactureProps)).toStrictEqual(["tren", "oso"]);
  });

  it("should return []", () => {
    const gifts = ["tren", "oso", "pelota"];
    const materials = "";

    const manufactureProps = {
      gifts,
      materials,
    };
    expect(manufacture(manufactureProps)).toStrictEqual([]);
  });
});
