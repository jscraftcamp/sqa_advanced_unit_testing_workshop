// test double

// dummies -> spy
// fake -> spy
// stubs -> spy
// mocks -> spy

import { vi } from "vitest";

class Person {
  read() {
    return fetch("/my_backend").json().name;
  }

  fullName() {
    const personData = this.read();
    // console.log(personData);
    return personData.firstName + " " + personData.name;
  }
}

describe("Stub Example", () => {
  it("should return full name of Person from API", () => {
    const p = new Person();
    const spy = vi.spyOn(p, "read");

    spy.mockReturnValue({ name: "Wonder", firstName: "Alice" });

    p.fullName();

    // expect(spy).toHaveBeenCalledTimes(2)
    expect(p.fullName()).toEqual("Alice Wonder");
  });
});
