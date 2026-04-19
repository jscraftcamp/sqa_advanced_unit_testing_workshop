import { describe, expect, it } from "vitest";
import Alarm from "./Alarm";

describe("Tire Pressure Alarm", () => {
  it("should be off by default", () => {
    const alarm = new Alarm();

    expect(alarm.isOn()).toBeFalsy();
  });
  it.skip("should check that the alarm turn on if pressure is to low", () => {
    const alarm = new Alarm();

    alarm.check();

    expect(alarm.isOn()).toBeTruthy();
  });
});
