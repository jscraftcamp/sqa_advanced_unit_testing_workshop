const BASE_URL = "https://swapi.dev/api";

const getPeople = async () => await (await fetch(BASE_URL + "/people/")).json();

const peopleWithEyeColor = async (color, _getPeople = getPeople) => {
  const people = await _getPeople();
  console.log(people);
  return people.results.filter((p) => p.eye_color === color).map((p) => p.name);
};

describe("peopleWithEyeColor", () => {
  it("returns names of people with matching eye color", async () => {
    const getPeopleStub = async () => ({
      results: [
        {
          name: "Luke Skywalker",
          eye_color: "blue",
        },
        {
          name: "C-3PO",
          eye_color: "yellow",
        },
        {
          name: "Owen Lars",
          eye_color: "blue",
        },
      ],
    });

    const result = await peopleWithEyeColor("blue", getPeopleStub);
    expect(result).toEqual(["Luke Skywalker", "Owen Lars"]);
  });
});

describe("getPeopleIOTest", () => {
  it("fetches the people from server", async () => {
    const people = await getPeople();
    expect(people.count).toBeGreaterThan(50);
    expect(people.results).toHaveLength(10);
    expect(Object.keys(people.results[0])).toContain("name");
    expect(Object.keys(people.results[0])).toContain("eye_color");
  });
});
