import { beforeEach, describe, expect, it, vi } from "vitest";

const BASE_URL = "https://swapi.dev/api";

const peopleWithEyeColor = async (color) => {
  const people = await (await fetch(BASE_URL + "/people/")).json();
  // console.log(people);
  return people.results.filter((p) => p.eye_color === color).map((p) => p.name);
};

globalThis.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        results: [{ name: "Luke", eye_color: "blue" }, { name: "Darth" }],
      }),
  })
);

describe("peopleWithEyeColor", () => {
  beforeEach(() => {
    vi.mocked(globalThis.fetch).mockClear();
    globalThis.fetch.mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [{ name: "Luke", eye_color: "blue" }, { name: "Darth" }],
          }),
      })
    );
  });
  it("returns names of people with matching eye color", async () => {
    const result = await peopleWithEyeColor("blue");
    const result2 = await peopleWithEyeColor("blue");
    expect(result2).toEqual(["Luke"]);
  });
});
