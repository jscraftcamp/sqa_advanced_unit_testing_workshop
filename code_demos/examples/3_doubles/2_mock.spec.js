import { vi } from "vitest";

const print = (text) => console.log(text + "\n");

// functional dependency injection
const greet = (name, extPrint = print) => extPrint("Hello " + name);

describe("Mock Example: greet", () => {
  it("should print a greeting with Name", () => {
    const printSpy = vi.fn();
    greet("Alice", printSpy);
    expect(printSpy).toHaveBeenCalledWith("Hello Alice");
  });
});

// greet("Steve", () => {});
