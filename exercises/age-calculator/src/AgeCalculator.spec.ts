import { describe, expect, it } from "vitest";
import AgeCalculator from "./AgeCalculator";

describe("Age Calculator", () => {
  it("should not be adult by default", () => {
    const calculator = new AgeCalculator(new Date(2006, 5, 15));

    expect(calculator.isAdult()).toBeFalsy();
  });
  it.skip("should mark as adult when age is at least 18", () => {
    const calculator = new AgeCalculator(new Date(2006, 5, 15));

    calculator.check();

    expect(calculator.isAdult()).toBeTruthy();
  });
});
