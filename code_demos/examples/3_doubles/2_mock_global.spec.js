import { vi } from "vitest";

const greet = (name) => print("Hello " + name);

globalThis.print = vi.fn();

describe("Mock Example: greet", () => {
  beforeEach(() => {
    print.mockClear();
  });

  it("should print a greeting with Name", () => {
    greet("Alice");

    expect(print).toHaveBeenCalledWith("Hello Alice");
  });

  it("don't forget to clear", () => {
    // no execution
    expect(print).not.toHaveBeenCalledWith("Hello Alice");
  });
});
