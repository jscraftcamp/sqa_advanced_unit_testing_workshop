// @vitest-environment happy-dom
import { vi } from "vitest";

vi.spyOn(localStorage, "getItem");

const numberOfActiveTodos = () =>
  localStorage.getItem("active_todos").filter((i) => i.active).length;

describe("Mock Example: greet", () => {
  beforeEach(() => {
    localStorage.getItem.mockClear();
  });
  it("should get todo from localStorage", () => {
    localStorage.getItem.mockReturnValue([
      { text: "Find Plans", active: false },
      { text: "Find Save World", active: true },
      { text: "Get Out of House", active: true },
    ]);

    localStorage.getItem("foo 1");

    expect(numberOfActiveTodos()).toEqual(2);
  });

  it("don't forget to clear", () => {
    // no execution

    // console.log(localStorage.getItem.mock.calls)
    expect(localStorage.getItem).not.toHaveBeenCalled();
  });
});
