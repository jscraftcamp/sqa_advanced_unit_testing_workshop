import { describe, expect, it } from "vitest";
import type { GetAgeForName } from "./getAgeForName";
import { getOldestName } from "./getOldestName";

//Fake Values { Alice: 30, Bob: 52, Helmut: 67 }

describe("getOldestName", () => {
  it.skip("returns the name with the highest estimated age (fake GetAgeForName)", async () => {
    const result = await getOldestName(["Alice", "Helmut", "Bob"]);

    expect(result).toBe("Helmut");
  });
});
