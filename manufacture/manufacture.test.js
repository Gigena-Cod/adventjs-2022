
// const gifts = ['tren', 'oso', 'pelota']
// const materials = 'tronesa'

// manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

// const gifts = ['juego', 'puzzle']
// const materials = 'jlepuz'

// manufacture(gifts, materials) // ["puzzle"]

// const gifts = ['libro', 'ps5']
// const materials = 'psli'

// manufacture(gifts, materials) // []

import { describe, it, expect } from "vitest";
import { manufacture } from "./manufacture";

describe("manufacture", () => {
  it("should be a function", () => {
    expect(typeof manufacture).toBe("function");
  });
});
